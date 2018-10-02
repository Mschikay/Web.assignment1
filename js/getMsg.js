
function get() {
    //取出id为“one”表单中所有的属性的数据
    var form = document.getElementById("submitmessage");
    //one表单中第一个元素属性值
    var fname = form.elements(0).value;
    var lname = form.elements(1).value;
    var msg = form.elements(2).value;

    return fname, lname, msg;
}