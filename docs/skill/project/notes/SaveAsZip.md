# Save As Zip

## 要用到的npm包
```
jszip
jszip-utils
file-saver
```

## 工具函数
```js
/**
 * 将一组下载地址（nosURL）另存为一个压缩包。
 *
 * heshiyu on 2019年11月13日
 */
import JSZip from './node_modules/jszip';
import JSZipUtils from './node_modules/jszip-utils';
import { saveAs } from './node_modules/file-saver';

const load = (loadList, zipName, splitName, cb) => {
    if (!Array.isArray(loadList)) return;

    var zip = new JSZip();
    var Promise = window.Promise;

    cb && cb('start');

    if (!Promise) {
        Promise = JSZip.external.Promise;
    }

    /**
     * Fetch the content and return the associated promise.
     * @param {String} url the url of the content to fetch.
     * @return {Promise} the promise containing the data.
     */
    function urlToPromise(url) {
        return new Promise(function(resolve, reject) {
            JSZipUtils.getBinaryContent(url, function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    loadList.map((item, index) => {
        let decordUrl = decodeURI(item);
        let lastIndex = decordUrl.lastIndexOf(splitName);

        if (lastIndex === -1) {
            return;
        }

        let fileName = decordUrl.substring(lastIndex + splitName.length);
        return zip.file('[' + index + ']--' + fileName, urlToPromise(item), { binary: true });
    });

    // when everything has been downloaded, we can trigger the dl
    zip.generateAsync({ type: 'blob' }).then(function callback(blob) {
        cb && cb('end');
        saveAs(blob, zipName || new Date().getTime() + '.zip');
    });
};

const build = (cb, links, name, splitName) => {
    cb && cb(links, name || '批量作品', splitName);
};

export default { load, build };

```

## 使用时
```js
import SaveAsZip from '@/utils/save-as-zip.js';


const LINKS = ['www.baidu.com/a1.pdf', 'www.baidu.com/a2.pdf']
SaveAsZip.build(SaveAsZip.load, LINKS, '压缩包名字', 'download=');
```