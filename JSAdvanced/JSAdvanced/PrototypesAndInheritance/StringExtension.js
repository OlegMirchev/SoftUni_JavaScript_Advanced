(function solve() {

    String.prototype.ensureStart = function (str) {
        let result = '';

        if (this.startsWith(str)) {
            result = this;
        } else {
            result = str.concat(this);
        }

        return result.toString();
    }

    String.prototype.ensureEnd = function (str) {
        let result = '';

        if (this.endsWith(str)) {
            result = this;
        } else {
            result = this.concat(str);
        }

        return result.toString();
    }

    String.prototype.isEmpty = function () {
        this.length === 0 ? true : false;
    }

    String.prototype.truncate = function (n) {
        let result = '';

        if (n < 3) {
            return '.'.repeat(n);
        }

        if (this.length <= n) {
            result = this;
        } else {
            let index = this.substring(0, n - 2).lastIndexOf(' ');

            if (index === -1) {
                result = this.substring(0, n - 3) + '...';
            } else {
                result = this.substring(0, index) + '...';
            }
        }

        return result.toString();
    }

    String.format = function (str, ...params) {
        let result = '';

        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }

        result = str;
        return result;
    }
}());

let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);