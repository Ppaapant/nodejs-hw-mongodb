import fs from 'node:fs/promises';
import path from 'node:path';
import { UPLOADS_DIR } from '../constants/index.js';

export const saveFileToUploadsDir = async (file) => {
  const newPath = path.join(UPLOADS_DIR, file.filename);
  await fs.rename(file.path, newPath);
  return `/${file.filename}`;
};