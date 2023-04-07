define("ace/mode/lua_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

    var LuaHighlightRules = function() {

        var keywords = (
            "and|break|continue|do|else|elseif|end|"+
            "false|for|function|if|in|local|nil|not|"+
            "or|repeat|return|then|true|until|while"
        );

        var builtinConstants = ("true|false|nil|_G|_VERSION");

        var functions = (
            "Angles|Black|Blue|DarkGray|Delay|ElapsedTime|Enum|FromAxis|FromNormalId|Game|Gray|Green|Monospace|New|Plex|PluginManager|Random|Red|Spawn|Stats|"+
            "System|UI|UserSettings|Version|Wait|White|Workspace|Yellow|_VERSION|abs|acos|appendfile|arshift|asin|assert|atan|atan2|badd|band|bdiv|bmul|bnot|"+
            "bor|bsub|bswap|btest|bxor|byte|cache_invalidate|cache_replace|cancel|ceil|char|charpattern|checkcaller|checkparallel|clamp|clear|clock|clone|clonefunction|"+
            "cloneref|close|codepoint|codes|collectgarbage|compress|concat|connect|cos|cosh|countlz|countrz|create|create_comm_channel|date|decode|decompile|decrypt|"+
            "defer|deg|delay|delfile|delfolder|derive|desynchronize|difftime|dumpheap|elapsedTime|encode|encrypt|error|exp|extract|find|fireclickdetector|fireproximityprompt|firesignal|"+
            "firetouchinterest|floor|fmod|foreach|foreachi|format|freeze|frexp|fromAxis|fromAxisAngle|fromEnum|fromEulerAngles|fromEulerAnglesXYZ|fromEulerAnglesYXZ|fromHSV|fromHex|fromId|"+
            "fromIsoDate|fromLocalTime|fromMatrix|fromName|fromNormalId|fromOffset|fromOrientation|fromRGB|fromScale|fromUniversalTime|fromUnixTimestamp|fromUnixTimestampMillis|game|gcinfo|"+
            "get_calling_script|get_comm_channel|get_instances|get_loaded_modules|get_nil_instances|get_scripts|get_thread_identity|getactors|getcallingscript|getcallstack|getconnections|"+
            "getconstant|getconstants|getfenv|getgc|getgenv|gethiddenprop|gethiddenproperties|gethiddenproperty|gethiddenprops|getinfo|getinstancefromstate|getinstances|getloadedmodules|"+
            "getlocal|getlocals|getmemorycategory|getmenv|getmetatable|getn|getnamecallmethod|getnilinstances|getpcdprop|getpointerfromstate|getproperties|getprops|getproto|getprotos|"+
            "getrawmetatable|getreg|getregistry|getrenv|getscriptclosure|getscripthash|getscripts|getsenv|getspecialinfo|getstack|getstateenv|getstates|getsynasset|getupvalue|getupvalues|"+
            "getvirtualinputmanager|gmatch|graphemes|gsub|hash|hookfunc|hookfunction|hookmetamethod|huge|identifyexecutor|identity|info|insert|ipairs|is_beta|is_cached|is_lclosure|is_protosmasher_caller|"+
            "is_protosmasher_closure|is_redirection_enabled|is_synapse_function|isactor|isconnectionenabled|isfile|isfolder|isfrozen|islclosure|isluau|isnetworkowner|isrbxactive|isreadonly|isuntouched|"+
            "iswindowactive|isyieldable|keypress|keyrelease|ldexp|len|listfiles|loadfile|loadmodule|loadstring|log|log10|lookAt|lower|lrotate|lshift|make_readonly|make_writeable|makefolder|"+
            "match|max|maxn|messagebox|messageboxasync|min|modf|mouse1click|mouse1press|mouse1release|mouse2click|mouse2press|mouse2release|mousemoveabs|mousemoverel|mousescroll|move|new|newcclosure|"+
            "newproxy|next|nfcnormalize|nfdnormalize|noise|now|offset|on_actor_created|one|pack|packsize|pairs|palette|pcall|pi|pow|print|printconsole|printidentity|profilebegin|profileend|protect_gui|"+
            "queue_on_teleport|rad|random|randomseed|rawequal|rawget|rawlen|rawset|rconsoleclear|rconsoleerr|rconsoleinfo|rconsoleinput|rconsoleinputasync|rconsolename|rconsoleprint|rconsolewarn|"+
            "readbinarystring|readfile|remove|rep|replace|replaceclosure|request|require|resetmemorycategory|resume|reverse|rol|ror|round|rrotate|rshift|run_on_actor|run_secure_lua|running|saveinstance|"+
            "secure_call|select|set_thread_identity|setclipboard|setconstant|setfenv|setfflag|setfpscap|sethiddenprop|sethiddenproperty|setlocal|setmemorycategory|setmetatable|setnamecallmethod|setrawmetatable|"+
            "setreadonly|setscriptable|setstack|settings|setuntouched|setupvalue|setupvaluename|sign|sin|sinh|sort|spawn|split|sqrt|stats|status|sub|syn_checkcaller|syn_clipboard_set|syn_context_get|syn_context_set|"+
            "syn_crypt_b64_decode|syn_crypt_b64_encode|syn_crypt_decrypt|syn_crypt_derive|syn_crypt_encrypt|syn_crypt_hash|syn_crypt_random|syn_decompile|syn_getcallingscript|syn_getgc|syn_getgenv|syn_getinstances|"+
            "syn_getloadedmodules|syn_getmenv|syn_getreg|syn_getrenv|syn_getsenv|syn_io_append|syn_io_delfile|syn_io_delfolder|syn_io_isfile|syn_io_isfolder|syn_io_listdir|syn_io_makefolder|syn_io_read|syn_io_write|"+
            "syn_isactive|syn_islclosure|syn_keypress|syn_keyrelease|syn_mouse1click|syn_mouse1press|syn_mouse1release|syn_mouse2click|syn_mouse2press|syn_mouse2release|syn_mousemoveabs|syn_mousemoverel|"+
            "syn_mousescroll|syn_newcclosure|syn_setfflag|syn_websocket_close|syn_websocket_connect|syn_websocket_send|synchronize|t2s|tan|tanh|tick|time|toHSV|tobit|tohex|tonumber|tostring|traceback|type|typeof|"+
            "unlockmodulescript|unpack|unprotect_gui|upper|validfgwindow|validlevel|version|wait|warn|workspace|wrap|write_clipboard|writefile|xAxis|xpcall|yAxis|yield|ypcall|zAxis|zero"
        );

        var stdLibaries = (
            "Axes|BrickColor|CFrame|CatalogSearchParams|CellId|Color3|"+
            "ColorSequence|ColorSequenceKeypoint|DateTime|DockWidgetPluginGuiInfo|"+
            "Drawing|Faces|FloatCurveKey|Font|Instance|NumberRange|NumberSequence|"+
            "NumberSequenceKeypoint|OverlapParams|PathWaypoint|PhysicalProperties|"+
            "PluginDrag|Random|Ray|RaycastParams|Rect|Region3|Region3int16|RotationCurveKey|"+
            "TweenInfo|UDim|UDim2|Vector2|Vector2int16|Vector3|Vector3int16"
        );

        var deprecatedIn5152 = ("setn|foreach|foreachi|gcinfo|log10|maxn");

        var keywordMapper = this.createKeywordMapper({
            "keyword": keywords,
            "support.function": functions,
            "keyword.deprecated": deprecatedIn5152,
            "constant.library": stdLibaries,
            "constant.language": builtinConstants,
            "variable.language": "self"
        }, "identifier");

        var decimalInteger = "(?:(?:[1-9]\\d*)|(?:0))";
        var hexInteger = "(?:0[xX][\\dA-Fa-f]+)";
        var integer = "(?:" + decimalInteger + "|" + hexInteger + ")";

        var fraction = "(?:\\.\\d+)";
        var intPart = "(?:\\d+)";
        var pointFloat = "(?:(?:" + intPart + "?" + fraction + ")|(?:" + intPart + "\\.))";
        var floatNumber = "(?:" + pointFloat + ")";

        this.$rules = {
            "start" : [{
                stateName: "bracketedComment",
                onMatch : function(value, currentState, stack){
                    stack.unshift(this.next, value.length - 2, currentState);
                    return "comment";
                },
                regex : /\-\-\[=*\[/,
                next  : [
                    {
                        onMatch : function(value, currentState, stack) {
                            if (value.length == stack[1]) {
                                stack.shift();
                                stack.shift();
                                this.next = stack.shift();
                            } else this.next = "";
                            return "comment";
                        },
                        regex : /\]=*\]/,
                        next  : "start"
                    }, {
                        defaultToken : "comment"
                    }
                ]
            },

            {
                token : "comment",
                regex : "\\-\\-.*$"
            },
            {
                stateName: "bracketedString",
                onMatch : function(value, currentState, stack){
                    stack.unshift(this.next, value.length, currentState);
                    return "string.start";
                },
                regex : /\[=*\[/,
                next  : [
                    {
                        onMatch : function(value, currentState, stack) {
                            if (value.length == stack[1]) {
                                stack.shift();
                                stack.shift();
                                this.next = stack.shift();
                            } else this.next = "";
                            return "string.end";
                        },
                        
                        regex : /\]=*\]/,
                        next  : "start"
                    }, {
                        defaultToken : "string"
                    }
                ]
            },
            {
                token : "string",           // " string
                regex : '"(?:[^\\\\]|\\\\.)*?"'
            }, {
                token : "string",           // ' string
                regex : "'(?:[^\\\\]|\\\\.)*?'"
            }, {
                token : "constant.numeric", // float
                regex : floatNumber
            }, {
                token : "constant.numeric", // integer
                regex : integer + "\\b"
            }, {
                token : keywordMapper,
                regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
            }, {
                token : "keyword.operator",
                regex : "\\+|\\-|\\*|\\/|%|\\#|\\^|~|<|>|<=|=>|==|~=|=|\\:|\\;|\\.\\.\\.|\\.\\."
            }, {
                token : "paren.lparen",
                regex : "[\\[\\(\\{]"
            }, {
                token : "paren.rparen",
                regex : "[\\]\\)\\}]"
            }, {
                token : "text",
                regex : "\\s+|\\w+"
            } ]
        };
        
        this.normalizeRules();
    };

    oop.inherits(LuaHighlightRules, TextHighlightRules);
    exports.LuaHighlightRules = LuaHighlightRules;
});

define("ace/mode/folding/lua",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"], function(require, exports, module) {
    "use strict";

    var oop = require("../../lib/oop");
    var BaseFoldMode = require("./fold_mode").FoldMode;
    var Range = require("../../range").Range;
    var TokenIterator = require("../../token_iterator").TokenIterator;


    var FoldMode = exports.FoldMode = function() {};

    oop.inherits(FoldMode, BaseFoldMode);

    (function() {

        this.foldingStartMarker = /\b(function|then|do|repeat)\b|{\s*$|(\[=*\[)/;
        this.foldingStopMarker = /\bend\b|^\s*}|\]=*\]/;

        this.getFoldWidget = function(session, foldStyle, row) {
            var line = session.getLine(row);
            var isStart = this.foldingStartMarker.test(line);
            var isEnd = this.foldingStopMarker.test(line);

            if (isStart && !isEnd) {
                var match = line.match(this.foldingStartMarker);
                if (match[1] == "then" && /\belseif\b/.test(line))
                    return;
                if (match[1]) {
                    if (session.getTokenAt(row, match.index + 1).type === "keyword")
                        return "start";
                } else if (match[2]) {
                    var type = session.bgTokenizer.getState(row) || "";
                    if (type[0] == "bracketedComment" || type[0] == "bracketedString")
                        return "start";
                } else {
                    return "start";
                }
            }
            if (foldStyle != "markbeginend" || !isEnd || isStart && isEnd)
                return "";

            var match = line.match(this.foldingStopMarker);
            if (match[0] === "end") {
                if (session.getTokenAt(row, match.index + 1).type === "keyword")
                    return "end";
            } else if (match[0][0] === "]") {
                var type = session.bgTokenizer.getState(row - 1) || "";
                if (type[0] == "bracketedComment" || type[0] == "bracketedString")
                    return "end";
            } else
                return "end";
        };

        this.getFoldWidgetRange = function(session, foldStyle, row) {
            var line = session.doc.getLine(row);
            var match = this.foldingStartMarker.exec(line);
            if (match) {
                if (match[1])
                    return this.luaBlock(session, row, match.index + 1);

                if (match[2])
                    return session.getCommentFoldRange(row, match.index + 1);

                return this.openingBracketBlock(session, "{", row, match.index);
            }

            var match = this.foldingStopMarker.exec(line);
            if (match) {
                if (match[0] === "end") if (session.getTokenAt(row, match.index + 1).type === "keyword") return this.luaBlock(session, row, match.index + 1);
                if (match[0][0] === "]") return session.getCommentFoldRange(row, match.index + 1);
                return this.closingBracketBlock(session, "}", row, match.index + match[0].length);
            };
        };

        this.luaBlock = function(session, row, column, tokenRange) {
            var stream = new TokenIterator(session, row, column);
            var indentKeywords = {
                "function": 1,
                "do": 1,
                "then": 1,
                "elseif": -1,
                "end": -1,
                "repeat": 1,
                "until": -1
            };

            var token = stream.getCurrentToken();
            if (!token || token.type != "keyword") return;

            var val = token.value;
            var stack = [val];
            var dir = indentKeywords[val];

            if (!dir) return;

            var startColumn = dir === -1 ? stream.getCurrentTokenColumn() : session.getLine(row).length;
            var startRow = row;

            stream.step = dir === -1 ? stream.stepBackward : stream.stepForward;
            while(token = stream.step()) {
                if (token.type !== "keyword") continue;
                var level = dir * indentKeywords[token.value];

                if (level > 0) stack.unshift(token.value);
                else if (level <= 0) {
                    stack.shift();
                    if (!stack.length && token.value != "elseif") break;
                    if (level === 0) stack.unshift(token.value);
                }
            }

            if (!token) return null;
            if (tokenRange) return stream.getCurrentTokenRange();

            var row = stream.getCurrentTokenRow();
            if (dir === -1) return new Range(row, session.getLine(row).length, startRow, startColumn);
            return new Range(startRow, startColumn, row, stream.getCurrentTokenColumn());
        };

    }).call(FoldMode.prototype);

});

define("ace/mode/lua",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/lua_highlight_rules","ace/mode/folding/lua","ace/range","ace/worker/worker_client"], function(require, exports, module) {
    "use strict";

    var oop = require("../lib/oop");
    var TextMode = require("./text").Mode;
    var LuaHighlightRules = require("./lua_highlight_rules").LuaHighlightRules;
    var LuaFoldMode = require("./folding/lua").FoldMode;
    var Range = require("../range").Range;
    var WorkerClient = require("../worker/worker_client").WorkerClient;

    var Mode = function() {
        this.HighlightRules = LuaHighlightRules;
        
        this.foldingRules = new LuaFoldMode();
        this.$behaviour = this.$defaultBehaviour;
    };
    oop.inherits(Mode, TextMode);

    (function() {
       
        this.lineCommentStart = "--";
        this.blockComment = {start: "--[", end: "]--"};
        
        var indentKeywords = {
            "function": 1,
            "then": 1,
            "do": 1,
            "else": 1,
            "elseif": 1,
            "repeat": 1,
            "end": -1,
            "until": -1
        };
        var outdentKeywords = [
            "else",
            "elseif",
            "end",
            "until"
        ];

        function getNetIndentLevel(tokens) {
            var level = 0;
            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i];
                if (token.type == "keyword") {
                    if (token.value in indentKeywords) level += indentKeywords[token.value];
                } else if (token.type == "paren.lparen") level += token.value.length;
                else if (token.type == "paren.rparen") level -= token.value.length;
            }
            if (level < 0) return -1;
            else if (level > 0) return 1;
            return 0;
        }

        this.getNextLineIndent = function(state, line, tab) {
            var indent = this.$getIndent(line);
            var level = 0;

            var tokenizedLine = this.getTokenizer().getLineTokens(line, state);
            var tokens = tokenizedLine.tokens;

            if (state == "start")  level = getNetIndentLevel(tokens);
            if (level > 0) return indent + tab;
            else if (level < 0 && indent.substr(indent.length - tab.length) == tab && !this.checkOutdent(state, line, "\n")) return indent.substr(0, indent.length - tab.length);
            return indent;
        };

        this.checkOutdent = function(state, line, input) {
            if (input != "\n" && input != "\r" && input != "\r\n") return false;
            if (line.match(/^\s*[\)\}\]]$/)) return true;

            var tokens = this.getTokenizer().getLineTokens(line.trim(), state).tokens;
            if (!tokens || !tokens.length) return false;

            return (tokens[0].type == "keyword" && outdentKeywords.indexOf(tokens[0].value) != -1);
        };

        this.getMatching = function(session, row, column) {
            if (row == undefined) {
                var pos = session.selection.lead;
                column = pos.column;
                row = pos.row;
            }

            var startToken = session.getTokenAt(row, column);
            if (startToken && startToken.value in indentKeywords) return this.foldingRules.luaBlock(session, row, column, true);
        };

        this.autoOutdent = function(state, session, row) {
            var line = session.getLine(row);
            var column = line.match(/^\s*/)[0].length;
            if (!column || !row) return;

            var startRange = this.getMatching(session, row, column + 1);
            if (!startRange || startRange.start.row == row) return;
            var indent = this.$getIndent(session.getLine(startRange.start.row));
            if (indent.length != column) {
                session.replace(new Range(row, 0, row, column), indent);
                session.outdentRows(new Range(row + 1, 0, row + 1, 0));
            }
        };

        this.createWorker = function(session) {
            var worker = new WorkerClient(["ace"], "ace/mode/lua_worker", "Worker");
            worker.attachToDocument(session.getDocument());
            
            worker.on("annotate", function(e) {
                session.setAnnotations(e.data);
            });
            
            worker.on("terminate", function() {
                session.clearAnnotations();
            });
            
            return worker;
        };

        this.$id = "ace/mode/lua";
        this.snippetFileId = "ace/snippets/lua";
    }).call(Mode.prototype);
    exports.Mode = Mode;
});               
(function() {
    window.require(["ace/mode/lua"], function(m) {
        if (typeof module == "object" && typeof exports == "object" && module) module.exports = m;
    });
})();
            
