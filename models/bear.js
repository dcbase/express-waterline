var Waterline=require('waterline');

module.exports=Waterline.Collection.extend({
    identity:'bear',// 模型名，默认对应表名
    connection:'myLocalMySql',
    schema:true,
    attributes:{
        name:'string'
    }
});