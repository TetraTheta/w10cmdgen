var str = '';
var default_rtb = '←[';

/* I hate typing */
function $gid(id) { return document.getElementById(`g-${id}`); }
function $id(id) { return document.getElementById(id); }

function cdGenerate() {
  var input = document.getElementById('ipText').value;

  console.log(`Original: ${input}`);

  var a = checkStyle();
  console.log(`checkStyle: ${a}`);
  var b = checkForeground();
  console.log(`checkForeground: ${b}`);
  var c = checkBackground();
  console.log(`checkBackground: ${c}`);
  var d = checkResetAfter();
  console.log(`checkResetAfter: ${d}`);
  var e = checkPrepend();
  console.log(`checkPrepend: ${e}`);

  var sta = e + c + b + a + input + d;
  var stb = replaceAll2(sta, 'm←[', ';');
  str = stb;

  console.log(`stb: ${stb}`);

  $id('lbResult').innerHTML = '';
  $id('ipResult').value = stb;
}
function cdClean() {
  $gid('st-reset').checked = false;
  $gid('st-bold').checked = false;
  $gid('st-underline').checked = false;
  $gid('st-inverse').checked = false;
  $gid('st-reset-after').checked = false;
  $gid('st-prepend').checked = false;
  $gid('fg-bold').checked = false;
  $gid('fg-black').checked = false;
  $gid('fg-red').checked = false;
  $gid('fg-green').checked = false;
  $gid('fg-yellow').checked = false;
  $gid('fg-blue').checked = false;
  $gid('fg-magenta').checked = false;
  $gid('fg-cyan').checked = false;
  $gid('fg-white').checked = false;
  $gid('bg-bold').checked = false;
  $gid('bg-black').checked = false;
  $gid('bg-red').checked = false;
  $gid('bg-green').checked = false;
  $gid('bg-yellow').checked = false;
  $gid('bg-blue').checked = false;
  $gid('bg-magenta').checked = false;
  $gid('bg-cyan').checked = false;
  $gid('bg-white').checked = false;
  $gid('fg-none').checked = true;
  $gid('bg-none').checked = true;
  window.location.reload(false);
}
function cdCopy() {
  var stc = replaceAll2(str, '←', '\u001b');
  console.log(`stc: ${stc}`);

  copyToClipboard(stc);
}
function cdClear() {
  $id('lbResult').innerHTML = 'RESULT';
  $id('ipResult').value = '';
  str = '';
}

function checkStyle() {
  if (($gid('st-inverse').checked == false) && ($gid('st-bold').checked == false) && ($gid('st-underline').checked == false) && ($gid('st-inverse').checked == false)) { return '' }

  var rtb = default_rtb;

  if ($gid('st-reset').checked) { rtb += '0;' }
  if ($gid('st-bold').checked) { rtb += '1;' }
  if ($gid('st-underline').checked) { rtb += '4;' }
  if ($gid('st-inverse').checked) { rtb += '7;' }

  rtb = rtb.slice(0, -1);
  rtb += 'm';

  return rtb;
}
function checkForeground() {
  if ($gid('fg-none').checked == true) { return '' }
  var rtb = default_rtb;

  if (!$gid('fg-bold').checked) {
    if ($gid('fg-black').checked) { rtb += '30;' }
    if ($gid('fg-red').checked) { rtb += '31;' }
    if ($gid('fg-green').checked) { rtb += '32;' }
    if ($gid('fg-yellow').checked) { rtb += '33;' }
    if ($gid('fg-blue').checked) { rtb += '34;' }
    if ($gid('fg-magenta').checked) { rtb += '35;' }
    if ($gid('fg-cyan').checked) { rtb += '36;' }
    if ($gid('fg-white').checked) { rtb += '37;' }
  } else {
    if ($gid('fg-black').checked) { rtb += '90;' }
    if ($gid('fg-red').checked) { rtb += '91;' }
    if ($gid('fg-green').checked) { rtb += '92;' }
    if ($gid('fg-yellow').checked) { rtb += '93;' }
    if ($gid('fg-blue').checked) { rtb += '94;' }
    if ($gid('fg-magenta').checked) { rtb += '95;' }
    if ($gid('fg-cyan').checked) { rtb += '96;' }
    if ($gid('fg-white').checked) { rtb += '97;' }
  }

  rtb = rtb.slice(0, -1);
  rtb += 'm';

  return rtb;
}
function checkBackground() {
  if ($gid('bg-none').checked == true) { return '' }
  var rtb = default_rtb;

  if (!$gid('bg-bold').checked) {
    if ($gid('bg-black').checked) { rtb += '40;' }
    if ($gid('bg-red').checked) { rtb += '41;' }
    if ($gid('bg-green').checked) { rtb += '42;' }
    if ($gid('bg-yellow').checked) { rtb += '43;' }
    if ($gid('bg-blue').checked) { rtb += '44;' }
    if ($gid('bg-magenta').checked) { rtb += '45;' }
    if ($gid('bg-cyan').checked) { rtb += '46;' }
    if ($gid('bg-white').checked) { rtb += '47;' }
  } else {
    if ($gid('bg-black').checked) { rtb += '100;' }
    if ($gid('bg-red').checked) { rtb += '101;' }
    if ($gid('bg-green').checked) { rtb += '102;' }
    if ($gid('bg-yellow').checked) { rtb += '103;' }
    if ($gid('bg-blue').checked) { rtb += '104;' }
    if ($gid('bg-magenta').checked) { rtb += '105;' }
    if ($gid('bg-cyan').checked) { rtb += '106;' }
    if ($gid('bg-white').checked) { rtb += '107;' }
  }

  rtb = rtb.slice(0, -1);
  rtb += 'm';

  return rtb;
}
function checkResetAfter() {
  if ($gid('st-reset-after').checked == true) {
    var rtb = default_rtb + '0m';
    return rtb;
  } else {
    return '';
  }
}
function checkPrepend() {
  if ($gid('st-prepend').checked == true) {
    return 'echo ';
  } else {
    return '';
  }
}
function replaceAll2(str, searchStr, replaceStr) {
  return str.replace(new RegExp(escapeRegExp(searchStr), 'g'), replaceStr);
}
function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function copyToClipboard(string) {
  $id('hide').innerHTML = string;
  var temp = document.createElement('input');
  document.body.appendChild(temp);
  temp.setAttribute('value', string);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
}