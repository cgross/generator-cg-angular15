var ts = require('typescript');
var fs = require('fs');

var traverse = (parentNode, node, callback) => {
    var retVal = callback(parentNode, node);
    if (retVal === 'break') {
        return 'break';
    }
    ts.forEachChild(node, (childNode) => {
        if (retVal === 'break') {
            return;
        }
        retVal = traverse(node, childNode, callback);
    });
};

var save = function(indent){

    if (!indent) {
        indent = '    ';
    }

    var modules = this.dependencies.modules.map(mod => '\n' + indent + mod).join(', ');

    var contents = this.contents.substring(0,
        this.dependencies.start) + ' [' + modules + '\n]' +
        this.contents.substring(this.dependencies.end);

    fs.writeFileSync(this.file,contents,'utf8');
};

exports.parse = function(filename) {

    var contents = fs.readFileSync(filename).toString();

    var sourceFile = ts.createSourceFile(filename, contents, ts.ScriptTarget.ES6, false);

    var getNodeText = (node) => {
        return contents.substring(node.pos, node.end).trim();
    };

    var moduleData = null;

    traverse(null, sourceFile, (parentNode, node) => {
        if (node.kind === ts.SyntaxKind.CallExpression) {
            var code = getNodeText(node);
            if (!code.startsWith('angular.module') || node.arguments.length !== 2 || node.arguments[1].kind !== ts.SyntaxKind.ArrayLiteralExpression) {
                return;
            }

            moduleData = {
                file: filename,
                name: node.arguments[0].text,
                contents: contents,
                dependencies: {
                    start: node.arguments[1].pos,
                    end: node.arguments[1].end,
                    modules: []
                }
            };

            node.arguments[1].elements.forEach(el => moduleData.dependencies.modules.push(getNodeText(el)));
        }
    });

    if (!moduleData) {
        return null;
    }

    moduleData.save = save.bind(moduleData);
    return moduleData;
};