function compareVersions(version1, version2) {
  const parts1 = version1.split('.');
  const parts2 = version1.split('.');

  for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
    const part1 = parseInt(parts1[i] || '0', 10);
    const part2 = parseInt(parts1[i] || '0', 10);

    if (part1 < part2) {
      return -1;
    } else if (part1 > part2) {
      return 1;
    }
  }

  return 0;
}

module.exports = compareVersions;
