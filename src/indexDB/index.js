// var db;
// function indexedDBOk() { // 检测用户浏览器是否支持indexedDB
//     return "indexDB" in window
// }

// document.addEventListener('DOMContentLoaded', function () { // 监听DOM元素是否加载完毕
//     // 判断indexedDBOk是否支持？？？
//     if (!indexedDBOk) { return }

//     // 1. 打开数据库， indexedDB.open方法打开，接收两个参数，第一个参数是数据库名称，第二个是版本号
//     var request = window.indexedDB.open('CzsStore', 1) // 第二个参数不给，默认版本号
//     // upgradeneeded 事件----> 首先触发
//     // 如果指定的版本号，大于数据库的实际版本号，就会发生数据库升级事件upgradeneeded
//     // 通过事件对象的target.result属性，拿到数据库实例
//     request.onupgradeneeded = res => {
//         // 后续的操作主要在upgradeneeded事件的监听函数里面完成，因为这时版本从无到有，所以会触发这个事件
//         db = res.target.result; // target.result属性，拿到数据库实例
//         var objectStore;
//         // 通过contains方法检车某个对象是否已经存在了，如果不存在则可进行创建
//         if (!db.objectStoreNames.contains('CzsStore')) {
//             objectStore = db.createObjectStore('CzsStore', { autoIncrement: true }); // 新建数据库以后，新建对象仓库   
//             // 数据里没有合适作为主键的属性，可以让indexedDB自动生成主键
//             objectStore.createIndex('name', 'name', { unique: false });    // 新建索引，三个参数（索引名称、索引所在的属性、配置对象）
//         }
//     }
//     // success事件
//     request.onsuccess = res => {
//         db = request.result;  // 通过request的result属性拿到数据库的对象
//         console.log('数据库打开成功')

//         // 监听添加事件
//         document.querySelector('#top10').addEventListener('click',addTopStationLists,false)
//     }
// }, false)

// function addTopStationLists() {

// }
// 新增数据（向对象仓库写入数据记录），通过事务完成
// function add() {
//     request = db.transaction(['CzsStore'], 'readwrite')
//     .objectStore('CzsStore')
//     .add({ id: 1, name: '张三' });

//   request.onsuccess = function (event) {
//     console.log('数据写入成功');
//   };

//   request.onerror = function (event) {
//     console.log('数据写入失败');
//   }
// }

// add();