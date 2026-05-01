export const config = { runtime: "edge" };

// String Recovery System
const _0x4f2a = ['\x68\x6f\x73\x74', '\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e', '\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65', '\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x65\x6e\x74\x69\x63\x61\x74\x65', '\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e', '\x74\x65', '\x74\x72\x61\x69\x6c\x65\x72', '\x74\x72\x61\x6e\x73\x66\x65\x72\x2d\x65\x6e\x63\x6f\x64\x69\x6e\x67', '\x75\x70\x67\x72\x61\x64\x65', '\x66\x6f\x72\x77\x61\x72\x64\x65\x64', '\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x68\x6f\x73\x74', '\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x70\x72\x6f\x74\x6f', '\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x70\x6f\x72\x74', '\x78\x2d\x76\x65\x72\x63\x65\x6c\x2d', '\x78\x2d\x72\x65\x61\x6c\x2d\x69\x70', '\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x66\x6f\x72', '\x4d\x69\x73\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64\x3a\x20\x54\x41\x52\x47\x45\x54\x5f\x44\x4f\x4d\x41\x49\x4e', '\x68\x61\x6c\x66', '\x6d\x61\x6e\x75\x61\x6c'];
const _0x1a2b = (_0x5c3d) => _0x4f2a[_0x5c3d];

const _0x9f8a2 = (process.env.TARGET_DOMAIN || "").replace(/\/$/, "");
const _0x3e7d1 = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(_0x1a2b));

export default async function (_0x7b2e1) {
  // Noise/Junk Logic
  const _0xdead = (a, b) => a ^ b;
  if (_0xdead(10, 10) !== 0) return;

  if (!_0x9f8a2) {
    return new Response(_0x1a2b(16), { status: 500 });
  }

  try {
    const _0x55ac2 = _0x7b2e1.url.indexOf("/", 8);
    const _0x1122f = _0x55ac2 === -1 ? _0x9f8a2 + "/" : _0x9f8a2 + _0x7b2e1.url.slice(_0x55ac2);
    
    const _0x8899a = new Headers();
    let _0xccdd1 = null;

    for (const [_0xkey, _0xval] of _0x7b2e1.headers) {
      const _0xlowKey = _0xkey.toLowerCase();
      if (_0x3e7d1.has(_0xlowKey) || _0xlowKey.startsWith(_0x1a2b(13))) continue;
      
      if (_0xlowKey === _0x1a2b(14)) {
        _0xccdd1 = _0xval;
        continue;
      }
      if (_0xlowKey === _0x1a2b(15)) {
        if (!_0xccdd1) _0xccdd1 = _0xval;
        continue;
      }
      _0x8899a.set(_0xkey, _0xval);
    }

    if (_0xccdd1) _0x8899a.set(_0x1a2b(15), _0xccdd1);

    const _0xmeth = _0x7b2e1.method;
    const _0xbodyCheck = !['GET', 'HEAD'].includes(_0xmeth);

    return await fetch(_0x1122f, {
      method: _0xmeth,
      headers: _0x8899a,
      body: _0xbodyCheck ? _0x7b2e1.body : undefined,
      duplex: _0x1a2b(17),
      redirect: _0x1a2b(18)
    });
  } catch (_0xerr) {
    return new Response(null, { status: 502 });
  }
}

