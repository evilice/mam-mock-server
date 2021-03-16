import { Injectable } from '@nestjs/common';
import { StorageDirectory } from './entities/storage-directory.entity';
import { StorageFile } from './entities/storage-file.entity';
import mockData from './mock-data';

const root: StorageDirectory = mockData;

const createDirectory = (path: string): StorageDirectory | undefined => {
  const name = path.split('/').pop();
  const parent = getDirectory(path, -1);
  if (parent) {
    const directory = {
      name: path.split('/').pop(),
      children: {},
    } as StorageDirectory;
    parent.children[name] = directory;
    return directory;
  }
  return void 0;
};

const findDirectory = (
  parent: StorageDirectory,
  parts: string[],
): StorageDirectory => {
  if (parts.length) {
    const nextLevel = parts.pop();
    if (nextLevel) {
      const directory = parent.children[nextLevel];

      if (directory && !(directory instanceof StorageFile)) {
        return findDirectory(directory, parts);
      } else return void 0;
    }
  }
  return parent;
};
const getDirectory = (path: string, deep?: number): StorageDirectory => {
  let pathParts: Array<string> = path.split('/');
  if (deep) pathParts = pathParts.splice(deep);

  // console.log({ path, deep });

  return findDirectory(root, pathParts.reverse());
};

@Injectable()
export class StoragesService {
  async getContent(path: string = ''): Promise<StorageDirectory> {
    return new Promise((resolve, reject) => {
      resolve(getDirectory(path));
    });
  }

  async addDirectory(path: string, name: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const directory = getDirectory(path);
      if (!directory.children[name]) {
        directory.children[name] = { name, children: {} } as StorageDirectory;
        resolve(true);
      } else resolve(false);
    });
  }

  async remove(path: string) {
    new Promise((resolve, reject) => {
      const parent = getDirectory(path, -1);
      const directory = getDirectory(path);

      console.log({ parent, directory });

      const deleted = delete parent.children[directory.name];

      const pt = getDirectory(path);
      console.log({ parent: pt });
      resolve(true);
    });
  }

  async addAsset(path: string, asset: StorageFile) {
    return new Promise((resolve, reject) => {
      const directory = getDirectory(path) || createDirectory(path);
      directory.children[asset.name];
      resolve(true);
    });
  }
}
