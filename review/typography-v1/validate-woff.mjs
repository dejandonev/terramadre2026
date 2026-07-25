import { readFileSync } from "node:fs";
import { inflateSync } from "node:zlib";

const fontPath = new URL(
  "../../assets/fonts/publico-headline/PublicoHeadline-Medium-Web.woff",
  import.meta.url,
);
const specimen = [
  "А Б В Г Д Ѓ Е Ж З Ѕ И Ј К Ќ Л Љ М Н Њ О П Р С Т Ќ У Ф Х Ц Ч Џ Ш",
  "а б в г д ѓ е ж з ѕ и ј к ќ л љ м н њ о п р с т ќ у ф х ц ч џ ш",
  "Македонија Торино приказната овоштарниците различност прашања",
  "патување иднината човек вкус Ѓ Ќ Ѕ Љ Њ Џ",
].join(" ");

const file = readFileSync(fontPath);
if (file.toString("ascii", 0, 4) !== "wOFF") {
  throw new Error("Expected a WOFF container.");
}

const numTables = file.readUInt16BE(12);
let cmap;

for (let index = 0; index < numTables; index += 1) {
  const directoryOffset = 44 + (index * 20);
  const tag = file.toString("ascii", directoryOffset, directoryOffset + 4);

  if (tag !== "cmap") {
    continue;
  }

  const offset = file.readUInt32BE(directoryOffset + 4);
  const compressedLength = file.readUInt32BE(directoryOffset + 8);
  const originalLength = file.readUInt32BE(directoryOffset + 12);
  const table = file.subarray(offset, offset + compressedLength);
  cmap = compressedLength < originalLength ? inflateSync(table) : table;
  break;
}

if (!cmap) {
  throw new Error("The supplied WOFF has no cmap table.");
}

const records = [];
const numCmaps = cmap.readUInt16BE(2);

for (let index = 0; index < numCmaps; index += 1) {
  const recordOffset = 4 + (index * 8);
  const platform = cmap.readUInt16BE(recordOffset);
  const encoding = cmap.readUInt16BE(recordOffset + 2);
  const offset = cmap.readUInt32BE(recordOffset + 4);
  const format = cmap.readUInt16BE(offset);
  records.push({ platform, encoding, offset, format });
}

const selected = records.find((record) => record.format === 12)
  ?? records.find((record) => record.format === 4);

if (!selected) {
  throw new Error("No supported Unicode cmap format was found.");
}

const glyphForFormat12 = (codePoint) => {
  const groupCount = cmap.readUInt32BE(selected.offset + 12);

  for (let index = 0; index < groupCount; index += 1) {
    const groupOffset = selected.offset + 16 + (index * 12);
    const start = cmap.readUInt32BE(groupOffset);
    const end = cmap.readUInt32BE(groupOffset + 4);

    if (codePoint >= start && codePoint <= end) {
      return cmap.readUInt32BE(groupOffset + 8) + codePoint - start;
    }
  }

  return 0;
};

const glyphForFormat4 = (codePoint) => {
  if (codePoint > 0xffff) {
    return 0;
  }

  const tableOffset = selected.offset;
  const tableLength = cmap.readUInt16BE(tableOffset + 2);
  const tableEnd = tableOffset + tableLength;
  const segmentCount = cmap.readUInt16BE(tableOffset + 6) / 2;
  const endCodes = tableOffset + 14;
  const startCodes = endCodes + (segmentCount * 2) + 2;
  const deltas = startCodes + (segmentCount * 2);
  const rangeOffsets = deltas + (segmentCount * 2);

  for (let index = 0; index < segmentCount; index += 1) {
    const end = cmap.readUInt16BE(endCodes + (index * 2));
    const start = cmap.readUInt16BE(startCodes + (index * 2));

    if (codePoint < start || codePoint > end) {
      continue;
    }

    const delta = cmap.readInt16BE(deltas + (index * 2));
    const rangeOffsetPosition = rangeOffsets + (index * 2);
    const rangeOffset = cmap.readUInt16BE(rangeOffsetPosition);

    if (rangeOffset === 0) {
      return (codePoint + delta) & 0xffff;
    }

    const glyphPosition = rangeOffsetPosition
      + rangeOffset
      + ((codePoint - start) * 2);

    if (glyphPosition + 2 > tableEnd) {
      return 0;
    }

    const glyph = cmap.readUInt16BE(glyphPosition);
    return glyph === 0 ? 0 : (glyph + delta) & 0xffff;
  }

  return 0;
};

const glyphFor = selected.format === 12 ? glyphForFormat12 : glyphForFormat4;
const tested = [...new Set([...specimen].filter((character) => character !== " "))];
const missing = tested.filter((character) => glyphFor(character.codePointAt(0)) === 0);

console.log(JSON.stringify({
  container: "WOFF",
  cmapFormat: selected.format,
  testedCharacters: tested.length,
  missingCharacters: missing,
}, null, 2));

if (missing.length > 0) {
  process.exitCode = 1;
}
