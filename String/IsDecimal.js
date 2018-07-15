
function IsDecimal(expression) {
    return (String(expression).search(/^\d+(\.\d+)?$/) != -1);
}