interface Mapper {
  _id?: string;
  name: string;
  mapper: Object;
}

export class Helper {
  public applyMapping(mapper: Mapper, data) {
    return Object.keys(mapper.mapper).reduce((result, key) => {
      const regExp = /(?<key>.+)\s\|\|\s(?<func>.+(?=\((?<args>.*)\)))/;
      const group = mapper.mapper[key].match(regExp);

      mapper.mapper[key].match(regExp)
        ? (result[group.groups.key] = this[`${group.groups.func}`](
            data[key],
            group.groups.args,
          ))
        : (result[mapper.mapper[key]] = data[key]);

      return result;
    }, {});
  }

  private default(key: string, args: string): string {
    return !key ? args : key;
  }

  private multivalue(key: string): string {
    if (Object.prototype.toString.call(key) === '[object Object]') {
      const stringValue = Object.keys(key).reduce((res, keys) => {
        if (key[keys] === true) return res + `${keys}, `;
        return res.trim();
      }, '');
      return stringValue.substring(0, stringValue.length - 1);
    } else {
      return key;
    }
  }
}
