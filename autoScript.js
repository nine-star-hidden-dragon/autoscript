/**
 * autojs 执行脚本
 *
 * Author: Jack huan
 * Date: 2021/04/24
 * Time: 13:45
 * Versions: 1.0.0
 * Github: https://github.com/HuanBaby1314
 */

// importClass(android.content.Content);
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
var antForestConfig = {
  shieldBase64:
    "iVBORw0KGgoAAAANSUhEUgAAABgAAAARCAIAAABIGvtnAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAA0RJREFUeJwVlFmSLCcMRZEQQ041vLbD9na9Gy/Ce3H4z/Wqh6zOIhMQkim+CIK43HskQX/+/VeuoTbWJkarVuJ9qTUYIjUEYqUfa7O2ki/WpxB2654+5HHW0xXmCQ3knEd6fNcj28IIYAmcad60WcFxFzCgrWsBIKmimmaUGmMpmDYpe+vPOAM2ZGFLTWxlX5u36ABFlUA9GAe2Sl9dpsuTxKhxQOe8UUmJ95cKzyO10p8xtdbuv3tzoBEgKlRRacwAOsRYWumhEIQ8h1GGKXsvpllpgXcBFTTOotq+umdEku5DgbmpZm9tGOyx51qdNGNR4lDmc1kWjsNB1rSMsdqWB2tNCOACA4IxTGAYugyAc9TTBd8dMphCWNky0TEt9XKp80nIFRAtJuDTGGvgJeCEgQW2Z6WXN2gAEkmHgcbRINTga843UnbxOJ3x7Q2GCZrUnJow9vI2tt57S6Mql+OUngdFDzu9uLw4eT3PGII9Zn2/3cGWOMplifPYE8OWyvZdt5W3R3cbhmGwbkBEaT9aTTRNeDx154aarXL0fllklkYmgz18wDh1Mi5vsr7z50ftl0vuYDEM6OOr+q1euQaaBr8H4KM13mvJnB0qdDR//B7B9G0vNx3f+lhx/em3VaVHBzPOMF/UxlwqpKPs2dDgbfDgO5jaEWx7gpx6V+/TtXcm5mLSN3594GN1+zYqt24zzu3yZk4/Dhc/UymppL06Ql8pVPQiXEo99hS2LTryITrRtm/2692833sr924I1vcOLz7yOOH0Go4msnPNykjGH/OvRTDLPeXkvx+z5GtX1xG2/Hh+2bzFJhN4gpabrNHXYdDRe2A4Dq0raA7UHNHgRsfaUSg++8RkKtX22fnn37UaIznwETR3Vjm6EiKfr/DjLUwTtSqPz/L9xTU57bDLYb1z8zyjBDSaHse+3fJh82EsDQTRsLR2BF+GpZ0ufH7D0wWsbx/37eetrF+W91l0pPttXy6mj98wk0pV7aSSZEK5okbspqCPWIoDzyddLjAvFqA91ny/pXWFesxGz0Ym+nzvCWx0Pgacl/5X1KasnUfqn0YxL8nkh7KczHSycbTk7fPJ9//K5we2fLL4G+gve7P/A8EOQb4JpgQoAAAAAElFTkSuQmCC",
  findImgBase64:
    "data:image/png;base64,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",
};
antForestConfig.shieldImg = images.fromBase64(antForestConfig.shieldBase64);
antForestConfig.findImg = images.fromBase64(antForestConfig.findImgBase64);
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

  //请求横屏截图
  requestScreenCapture(false);
  sleep(1000);
  //监测是否有弹窗,有的话关掉
  var closeBtn = text("关闭").findOne(1000);
  if (closeBtn != null) {
    toastLog("检测到弹窗,关闭");
    closeBtn.click();
  }
  var next = false;
  do {
    // var end = textContains().findOne(4000);
    // if (!end) {
    //   break;
    // }
    if (isShield()) {
      break;
    } else {
      getEnergy();
    }
    sleep(1000);
    var nextResult = images.findImage(
      captureScreen(),
      antForestConfig.findImg,
      {
        threshold: 0.7,
      }
    );
    next = nextResult ? true : false;
    if (next) {
      click(nextResult.x + 200, nextResult.y);
    }
  } while (next);
}

//循环点击能量球可能的位置
function getEnergy() {
  var titleobj = id("com.alipay.mobile.nebula:id/h5_tv_title").findOnce();
  var username = titleobj.text().replace("蚂蚁森林", "");
  toastLog("正在收取" + username + "能量");
  sleep(1000);
  var x = 150,
    y = 800;
  for (; x <= currentInfo.width / 2; ) {
    press(x, y, 1);
    press(x, y, 1);
    x += 40;
    y -= 30;
  }

  for (x = currentInfo.width / 2, y = 550; x < currentInfo.width - 100; ) {
    press(x, y, 1);
    press(x, y, 1);
    x += 40;
    y += 20;
  }
}

//判断好友森林是否有护盾
function isShield() {
  var titleobj = id("com.alipay.mobile.nebula:id/h5_tv_title").findOnce();
  var title = titleobj.text();
  //判断 保护罩
  var shieldResult = images.findImage(
    captureScreen(),
    antForestConfig.shieldImg,
    { threshold: 0.7 }
  );
  //title等于蚂蚁森林 代表在自己的森林
  return title != "蚂蚁森林" && shieldResult;
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
