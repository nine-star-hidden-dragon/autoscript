/**
 * autojs 执行脚本
 *
 * Author: Jack huan
 * Date: 2021/04/24
 * Time: 13:45
 * Versions: 1.0.0
 * Github: https://github.com/HuanBaby1314
 */

// 配置信息
var config = {
  versions: "v1.0.0",
  speed: 1,
  float: 1.25,
  swipeTips: "小兔子滑啊滑啊滑啊滑ヽ(￣▽￣)ﾉ",
  taskList: ["芭芭农场", "蚂蚁森林", "蚂蚁庄园"],
  appList: ["支付宝", "淘宝", "微博"],
  speedList: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
};

// 当前设备信息
var currentInfo = {
  width: getDeviceInfo("width"),
  height: getDeviceInfo("height"),
};

// 初始化
init();

function init() {
  isAccessibilityModel();
  setScreenMetricsTZ();
  //选择任务
  taskChoose();
}

/**
 * 任务选择
 */
function taskChoose() {
  var options = dialogs.singleChoice("需要执行的任务", config.taskList);
  if (typeof options !== "number") {
    toastLog("脚本已退出");
    exit();
  }
  // toastLog("选择的当前的任务" + JSON.stringify(options));
  runTask(options);
}

function runTask(taskIndex) {
  var enumKey = {
    芭芭农场: "babaFarm",
    蚂蚁森林: "antForest",
    蚂蚁庄园: "antManor",
  };
  var taskName = config.taskList[taskIndex];
  launchApp(config.appList[0]);
  sleep(2000);

  switch (taskIndex) {
    case 0:
      babaFarm(taskName);
      break;
    case 1:
      antForest(taskName);
      break;
    case 2:
      antManor(taskName);
      break;
    default:
      eixt();
      break;
  }
}

function babaFarm(taskName) {
  log(taskName);
  clickContent(taskName);
}

function antForest(taskName) {
  log(taskName);
  clickContent(taskName);
}

function antManor(taskName) {
  log(taskName);
  clickContent(taskName);
}

function setScreenMetricsTZ() {
  setScreenMetrics(currentInfo.width, currentInfo.height);
}

/**
 * 判断是否开启无障碍
 */
function isAccessibilityModel() {
  try {
    auto();
  } catch (error) {
    toast("请手动开启无障碍并授权给Auto.js");
    sleep(2000);
    exit();
    return false;
  }
  return true;
}

/**
 * 获取设备信息
 * @param key 设备属性名
 */
function getDeviceInfo(key) {
  return device && device[key] ? device[key] : "";
}

/**
 * 通过文字内容模拟点击按钮
 * @param content 按钮文字内容
 * @param type 点击类型，默认为text点击
 * @param sleepTime 等待时间，默认1000毫秒
 */
function clickContent(content, type, sleepTime) {
  var type = type || "text";
  var sleepTime = sleepTime || 1000;
  sleep(sleepTime * config.float * config.speed);
  if (type == "text") {
    var button = text(content).findOne();
  } else {
    var button = desc(content).findOne();
  }
  clickButton(button);
  return button;
}

/**
 * 根据控件的坐标范围随机模拟点击
 * @param button 按钮
 */
function clickButton(button) {
  var bounds = button.bounds();
  press(
    random(bounds.left, bounds.right),
    random(bounds.top, bounds.bottom),
    random(50, 100)
  );
}

/**
 * 范围随机数生成
 * @param min 最小值
 * @param max 最大值
 */
function random(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}
