const fs = require('fs');
const path = require('path');
module.exports = {
  // 统一 - 支付回调地址,格式为 "服务空间ID":"URL化地址"
  notifyUrl: {
    // 测试环境服务空间-支付回调地址
    'mp-b267e273-19a7-4288-99c7-f6f27f9c5b77': 'https://fc-mp-4b52a81f-b38d-462d-832b-d43161def1a5.next.bspapp.com/uni-pay-co',
    // 线上环境服务空间-支付回调地址（如果只有一个服务空间，则只需要配置线上环境服务空间即可）
    'mp-499e2a37-0c77-418a-82aa-3e5820ecb057': 'https://fc-mp-499e2a37-0c77-418a-82aa-3e5820ecb057.next.bspapp.com/uni-pay-co'
  },
  notifyKey: '5FB2CD73C7B53918728417C50762E6D4', // 跨云函数通信时的加密密钥，建议手动改下，不要使用默认的密钥，长度保持在32位即可
  // 微信支付相关
  wxpay: {
    enable: false, // 是否启用微信支付
    // 微信 - 小程序支付
    mp: {
      appId: '', // 小程序的appid
      secret: '', // 小程序的secret
      mchId: '', // 商户id
      key: '', // v2的api key
      pfx: fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
      v3Key: '', // v3的api key
      appCertPath: path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
      appPrivateKeyPath: path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
      version: 3 // 启用支付的版本 2代表v2版本 3 代表v3版本
    },
    // 微信 - APP支付
    app: {
      appId: '', // app开放平台下的应用的appid
      secret: '', // app开放平台下的应用的secret
      mchId: '', // 商户id
      key: '', // v2的api key
      pfx: fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
      v3Key: '', // v3的api key
      appCertPath: path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
      appPrivateKeyPath: path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
      version: 3 // 启用支付的版本 2代表v2版本 3 代表v3版本
    },
    // 微信 - 扫码支付
    native: {
      appId: '', // 可以是小程序或公众号或app开放平台下的应用的任意一个appid
      secret: '', // secret
      mchId: '', // 商户id
      key: '', // v2的api key
      pfx: fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
      v3Key: '', // v3的api key
      appCertPath: path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
      appPrivateKeyPath: path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
      version: 3 // 启用支付的版本 2代表v2版本 3 代表v3版本
    },
    // 微信 - 公众号支付
    jsapi: {
      appId: '', // 公众号的appid
      secret: '', // 公众号的secret
      mchId: '', // 商户id
      key: '', // v2的api key
      pfx: fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
      v3Key: '', // v3的api key
      appCertPath: path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
      appPrivateKeyPath: path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
      version: 3 // 启用支付的版本 2代表v2版本 3 代表v3版本
    },
    // 微信 - 手机外部浏览器H5支付
    mweb: {
      appId: '', // 可以是小程序或公众号或app开放平台下的应用的任意一个appid
      secret: '', // secret
      mchId: '', // 商户id
      key: '', // v2的api key
      pfx: fs.readFileSync(__dirname + '/wxpay/apiclient_cert.p12'), // v2需要用到的证书
      v3Key: '', // v3的api key
      appCertPath: path.join(__dirname, 'wxpay/apiclient_cert.pem'), // v3需要用到的证书
      appPrivateKeyPath: path.join(__dirname, 'wxpay/apiclient_key.pem'), // v3需要用到的证书
      version: 3, // 启用支付的版本 2代表v2版本 3 代表v3版本
      // 场景信息，必填
      sceneInfo: {
        h5_info: {
          type: 'Wap', // 此值固定Wap
          wap_url: '', // 你的H5首页地址，必须和你发起支付的页面的域名一致。
          wap_name: '' // 你的H5网站名称
        }
      }
    }
  },
  // 支付宝相关（加签方式选证书模式，加密算法选RSA2）
  alipay: {
    enable: true, // 是否启用支付宝支付
    // 支付宝 - 小程序支付配置
    mp: {
      appId: '9021000141612141', // 支付宝小程序appid
      privateKey:
        'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCMRFUWfUJcwwvmN5EJnIJkVueu8sv25xwNfiHEpv2DbP2mWTqyKje2R8Y3xVnqXJsP/KGDRQs+GhJvXQr+lOyecj5WfqRGWTYlVVSe1YKxR7+lQq7M/Wp6m//Sh53N17AB379IW1YaxT3FDD9KqxkRzIjjy32n9uqG9aryTfTUnP8KaByIq9GzVzBD0UfPyJsAG3bL9k87w4cLoLLKVam3gmTo5JqWY1h/hbRZkJhuGHfmpeAyfgsC7Es7dvRL7I9e15lNb32wYs1sb7ALwYAUeAu3z9MNsaUDS9tR7xW7DOBysEocKFpwkeLI0NQvGYexNpeNumDJzkDYXMQXg5svAgMBAAECggEAL0AxnaLSgScfUg0z6ZX0gtKXt2KI/QJ7e7waqgFK80P66leyoyP/ooLpLg5oLL/HaIpE6lCO6fukbCles8X9M57uivqcYipZSBhHqj3oicnOsGAXPGy9utHkSspuiVH4M5lo+XnzNo9tMHzgsUmT52AMWRhKmxNdi9skG/3Q1PIPSxUXEO+FJuPRUSZZwqB5maKR8HjU/G2Y6Xfq5zBN8lNyBeD7jxhd5/h1C47IalzJdbCpKYZkCMHFGM5JwTwI03wQGZck09opi3/+4wJYwOQ0m1RMXjwNFGs14wXN6otPn0Pz9wuppPAxSIl6nd1ja5+TDDjTyQqgaJpLH5wbEQKBgQDswlm59Q4/F7XtF2JWZ0MC7NjV0SphTY6/Tg2Iv/jJA5Xn1lcwoPfAFU02ssstgN99glE7M+8J8NaLauVlMjthlZ29OTpXolYZiT3UinmZ0CftUHpLH/8AtehZNvUEnXhXEv10eMZ6cAitpPwC/Z0gJBkon0CmWqneAYJoXFAcpwKBgQCXqoLxsQEHVn8KdYCR0xWWeUcn9zReBhwioKI++zFwOmJGQWY3EFuvmkH80npHAFGHRmx5vW4okGxZJo70fN+MtvPNhMbPWnFWfMZKX0eCCrGrE9KJdu3SsQoZ6iOUmJXqIkfZZS/Xwxp6F3Mk5jTDMUm+nr6PivqT/bm4KY42OQKBgQCZ4tT5JkvFPH8WBJ35NRL8Qr/JcjOOnR+MPopTeRuWZAs6bjmrtORzaCUQyXOANwSMiniL93yGRJDee3NwrA6mpd2qERlXvn8iB+81R3A0RnS9LhLe44QWjSXhXvQwtL10MzakTqALEujBHLxkoT1Ql8X2flRCDCnez7JYbK/xfwKBgGaa24WJWwnM0ZuQzM9av6MSHzqBejMV7RjcFYeIRvUG+o9PFUixT2XodTYGauT36TAcS6y8o/bbZgGWHWZ3yIEZEK18Y0fKhxycw0VzWhw3AeWcPnXzOIeucAgCJ9oStHE2iecgFpLgklwA20weVZmsEZjdKkxQGJ/gKjHWIzi5AoGAaQCKGigPJFwGe5mM2bbKuJUysV5+6CCkj5owm97yrxj+D4/eQMidQPNYk1icaGhad9ZtZ+fyViIfSWkCfonqiRMWu7TWZZaq3KBD695sI6ZW6FT6kcnCUtJ/6QscH0GrHwY1wb+1gH0/XMRDajFTYAxtlw09Fr797FTgS7ptutA=', // 支付宝商户私钥
      appCertPath: path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
      alipayPublicCertPath: path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
      alipayRootCertPath: path.join(__dirname, 'alipay/alipayRootCert.crt') // 支付宝根证书路径
    },
    // 支付宝 - APP支付配置
    app: {
      appId: '9021000141612141', // 支付宝开放平台下应用的appid
      privateKey:
        'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCMRFUWfUJcwwvmN5EJnIJkVueu8sv25xwNfiHEpv2DbP2mWTqyKje2R8Y3xVnqXJsP/KGDRQs+GhJvXQr+lOyecj5WfqRGWTYlVVSe1YKxR7+lQq7M/Wp6m//Sh53N17AB379IW1YaxT3FDD9KqxkRzIjjy32n9uqG9aryTfTUnP8KaByIq9GzVzBD0UfPyJsAG3bL9k87w4cLoLLKVam3gmTo5JqWY1h/hbRZkJhuGHfmpeAyfgsC7Es7dvRL7I9e15lNb32wYs1sb7ALwYAUeAu3z9MNsaUDS9tR7xW7DOBysEocKFpwkeLI0NQvGYexNpeNumDJzkDYXMQXg5svAgMBAAECggEAL0AxnaLSgScfUg0z6ZX0gtKXt2KI/QJ7e7waqgFK80P66leyoyP/ooLpLg5oLL/HaIpE6lCO6fukbCles8X9M57uivqcYipZSBhHqj3oicnOsGAXPGy9utHkSspuiVH4M5lo+XnzNo9tMHzgsUmT52AMWRhKmxNdi9skG/3Q1PIPSxUXEO+FJuPRUSZZwqB5maKR8HjU/G2Y6Xfq5zBN8lNyBeD7jxhd5/h1C47IalzJdbCpKYZkCMHFGM5JwTwI03wQGZck09opi3/+4wJYwOQ0m1RMXjwNFGs14wXN6otPn0Pz9wuppPAxSIl6nd1ja5+TDDjTyQqgaJpLH5wbEQKBgQDswlm59Q4/F7XtF2JWZ0MC7NjV0SphTY6/Tg2Iv/jJA5Xn1lcwoPfAFU02ssstgN99glE7M+8J8NaLauVlMjthlZ29OTpXolYZiT3UinmZ0CftUHpLH/8AtehZNvUEnXhXEv10eMZ6cAitpPwC/Z0gJBkon0CmWqneAYJoXFAcpwKBgQCXqoLxsQEHVn8KdYCR0xWWeUcn9zReBhwioKI++zFwOmJGQWY3EFuvmkH80npHAFGHRmx5vW4okGxZJo70fN+MtvPNhMbPWnFWfMZKX0eCCrGrE9KJdu3SsQoZ6iOUmJXqIkfZZS/Xwxp6F3Mk5jTDMUm+nr6PivqT/bm4KY42OQKBgQCZ4tT5JkvFPH8WBJ35NRL8Qr/JcjOOnR+MPopTeRuWZAs6bjmrtORzaCUQyXOANwSMiniL93yGRJDee3NwrA6mpd2qERlXvn8iB+81R3A0RnS9LhLe44QWjSXhXvQwtL10MzakTqALEujBHLxkoT1Ql8X2flRCDCnez7JYbK/xfwKBgGaa24WJWwnM0ZuQzM9av6MSHzqBejMV7RjcFYeIRvUG+o9PFUixT2XodTYGauT36TAcS6y8o/bbZgGWHWZ3yIEZEK18Y0fKhxycw0VzWhw3AeWcPnXzOIeucAgCJ9oStHE2iecgFpLgklwA20weVZmsEZjdKkxQGJ/gKjHWIzi5AoGAaQCKGigPJFwGe5mM2bbKuJUysV5+6CCkj5owm97yrxj+D4/eQMidQPNYk1icaGhad9ZtZ+fyViIfSWkCfonqiRMWu7TWZZaq3KBD695sI6ZW6FT6kcnCUtJ/6QscH0GrHwY1wb+1gH0/XMRDajFTYAxtlw09Fr797FTgS7ptutA=', // 支付宝商户私钥
      appCertPath: path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
      alipayPublicCertPath: path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
      alipayRootCertPath: path.join(__dirname, 'alipay/alipayRootCert.crt') // 支付宝根证书路径
    },
    // 支付宝 - H5支付配置（包含：网站二维码、手机H5，需申请支付宝当面付接口权限）
    native: {
      appId: '9021000141612141', // 支付宝开放平台下应用的appid
      privateKey:
        'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCMRFUWfUJcwwvmN5EJnIJkVueu8sv25xwNfiHEpv2DbP2mWTqyKje2R8Y3xVnqXJsP/KGDRQs+GhJvXQr+lOyecj5WfqRGWTYlVVSe1YKxR7+lQq7M/Wp6m//Sh53N17AB379IW1YaxT3FDD9KqxkRzIjjy32n9uqG9aryTfTUnP8KaByIq9GzVzBD0UfPyJsAG3bL9k87w4cLoLLKVam3gmTo5JqWY1h/hbRZkJhuGHfmpeAyfgsC7Es7dvRL7I9e15lNb32wYs1sb7ALwYAUeAu3z9MNsaUDS9tR7xW7DOBysEocKFpwkeLI0NQvGYexNpeNumDJzkDYXMQXg5svAgMBAAECggEAL0AxnaLSgScfUg0z6ZX0gtKXt2KI/QJ7e7waqgFK80P66leyoyP/ooLpLg5oLL/HaIpE6lCO6fukbCles8X9M57uivqcYipZSBhHqj3oicnOsGAXPGy9utHkSspuiVH4M5lo+XnzNo9tMHzgsUmT52AMWRhKmxNdi9skG/3Q1PIPSxUXEO+FJuPRUSZZwqB5maKR8HjU/G2Y6Xfq5zBN8lNyBeD7jxhd5/h1C47IalzJdbCpKYZkCMHFGM5JwTwI03wQGZck09opi3/+4wJYwOQ0m1RMXjwNFGs14wXN6otPn0Pz9wuppPAxSIl6nd1ja5+TDDjTyQqgaJpLH5wbEQKBgQDswlm59Q4/F7XtF2JWZ0MC7NjV0SphTY6/Tg2Iv/jJA5Xn1lcwoPfAFU02ssstgN99glE7M+8J8NaLauVlMjthlZ29OTpXolYZiT3UinmZ0CftUHpLH/8AtehZNvUEnXhXEv10eMZ6cAitpPwC/Z0gJBkon0CmWqneAYJoXFAcpwKBgQCXqoLxsQEHVn8KdYCR0xWWeUcn9zReBhwioKI++zFwOmJGQWY3EFuvmkH80npHAFGHRmx5vW4okGxZJo70fN+MtvPNhMbPWnFWfMZKX0eCCrGrE9KJdu3SsQoZ6iOUmJXqIkfZZS/Xwxp6F3Mk5jTDMUm+nr6PivqT/bm4KY42OQKBgQCZ4tT5JkvFPH8WBJ35NRL8Qr/JcjOOnR+MPopTeRuWZAs6bjmrtORzaCUQyXOANwSMiniL93yGRJDee3NwrA6mpd2qERlXvn8iB+81R3A0RnS9LhLe44QWjSXhXvQwtL10MzakTqALEujBHLxkoT1Ql8X2flRCDCnez7JYbK/xfwKBgGaa24WJWwnM0ZuQzM9av6MSHzqBejMV7RjcFYeIRvUG+o9PFUixT2XodTYGauT36TAcS6y8o/bbZgGWHWZ3yIEZEK18Y0fKhxycw0VzWhw3AeWcPnXzOIeucAgCJ9oStHE2iecgFpLgklwA20weVZmsEZjdKkxQGJ/gKjHWIzi5AoGAaQCKGigPJFwGe5mM2bbKuJUysV5+6CCkj5owm97yrxj+D4/eQMidQPNYk1icaGhad9ZtZ+fyViIfSWkCfonqiRMWu7TWZZaq3KBD695sI6ZW6FT6kcnCUtJ/6QscH0GrHwY1wb+1gH0/XMRDajFTYAxtlw09Fr797FTgS7ptutA=', // 支付宝商户私钥
      appCertPath: path.join(__dirname, 'alipay/appCertPublicKey.crt'), // 支付宝商户公钥路径
      alipayPublicCertPath: path.join(__dirname, 'alipay/alipayCertPublicKey_RSA2.crt'), // 支付宝公钥路径
      alipayRootCertPath: path.join(__dirname, 'alipay/alipayRootCert.crt') // 支付宝根证书路径
    }
  },
  // ios内购相关
  appleiap: {
    // ios内购支付
    app: {
      password: '', // App 专用共享密钥，App 专用共享密钥是用于接收此 App 自动续期订阅收据的唯一代码。如果您要将此 App 转让给其他开发者或不想公开主共享密钥，建议使用 App 专用共享密钥。非自动续订场景不需要此参数
      timeout: 10000, // 请求超时时间，单位：毫秒
      sandbox: true // 是否是沙箱环境
    }
  },
  // 微信虚拟支付
  'wxpay-virtual': {
    // 微信 - 小程序支付
    mp: {
      appId: '', // 小程序的appid
      secret: '',
      mchId: '', // 商户id
      offerId: '', // 支付应用ID
      appKey: '', // 现网AppKey（正式环境）
      sandboxAppKey: '', // 沙箱AppKey
      rate: 100, // 代币兑换比例，比如1元兑换100代币，那么这里就是100（需要开通虚拟支付的时候也设置成 1 人民币 = 100 代币）
      token: '', // 微信小程序通信的token，在开发 - 开发管理 - 消息推送 - Token(令牌)
      encodingAESKey: '', // 必须43位，微信小程序消息加密密钥，在开发 - 开发管理 - 消息推送 - EncodingAESKey(消息加解密密钥)
      sandbox: false // 是否是沙箱环境（注意：沙箱环境异步回调可能有延迟，建议直接正式环境测试）
    }
  }
};
