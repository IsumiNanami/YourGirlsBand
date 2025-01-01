// 成员的卡片信息（可根据实际情况动态生成或修改）
const members = [
    {
      name: "后藤一里",
      roles: ["Guitar"],
      lyricist: true,
      composer: false,
      cost: 5,
      selected: false,
      imgSrc: "https://pic3.zhimg.com/100/v2-0e411b46e9f5f01b3b2bfb97dafb4902_r.jpg"
    },
    {
      name: "丰川祥子",
      roles: ["Keyboard"],
      lyricist: false,
      composer: true,
      cost: 5,
      selected: false,
      imgSrc: "https://pic2.zhimg.com/100/v2-eb0a8cc629ab3093e7e9531600546567_r.jpg"
    },
    {
      name: "河原木桃香",
      roles: ["Guitar", "Vocal"],
      lyricist: false,
      composer: true,
      cost: 5,
      selected: false,
      imgSrc: "https://pic3.zhimg.com/100/v2-f42cf82b76941f8e21aa1a2d0f5d7d8c_r.jpg"
    },
    {
      name: "秋山澪",
      roles: ["Bass", "Vocal"],
      lyricist: true,
      composer: false,
      cost: 5,
      selected: false,
      imgSrc: "https://i.postimg.cc/pTqkx83s/temp-Image-WWp-Rfj.avif"
    },
    {
      name: "井芹仁菜",
      roles: ["Guitar", "Vocal"],
      lyricist: true,
      composer: false,
      cost: 4,
      selected: false,
      imgSrc: "https://i.postimg.cc/Hxk5HNwy/temp-Image63-Aqn-Q.avif"
    },
    {
      name: "高松灯",
      roles: ["Vocal"],
      lyricist: true,
      composer: false,
      cost: 4,
      selected: false,
      imgSrc: "https://i.postimg.cc/XY99gdNp/temp-Imageq6skps.avif"
    },
    {
      name: "平泽唯",
      roles: ["Guitar", "Vocal"],
      lyricist: true,
      composer: false,
      cost: 4,
      selected: false,
      imgSrc: "https://i.postimg.cc/pdxzcryk/temp-Imagep-UZOu-U.avif"
    },
    {
      name: "要乐奈",
      roles: ["Guitar"],
      lyricist: false,
      composer: false,
      cost: 4,
      selected: false,
      imgSrc: "https://i.postimg.cc/28s4v2Ds/temp-Imagex-OQrn-Z.avif"
    },
    {
      name: "山田凉",
      roles: ["Bass"],
      lyricist: false,
      composer: true,
      cost: 4,
      selected: false,
      imgSrc: "https://i.postimg.cc/nLcYcMZr/temp-Image5l9-We7.avif"
    },
    {
      name: "椎名立希",
      roles: ["Drum"],
      lyricist: false,
      composer: true,
      cost: 3,
      selected: false,
      imgSrc: "https://pic4.zhimg.com/100/v2-6e70fcb97eb87e10f40b956fb03cf2bb_r.jpg"
    },
    {
      name: "琴吹䌷",
      roles: ["Keyboard"],
      lyricist: false,
      composer: true,
      cost: 3,
      selected: false,
      imgSrc: "https://pica.zhimg.com/100/v2-5edce1d711fe355d84c0560dd52fcfe8_r.jpg"
    },
    {
      name: "广井菊理",
      roles: ["Bass", "Vocal"],
      lyricist: false,
      composer: false,
      cost: 3,
      selected: false,
      imgSrc: "https://picx.zhimg.com/100/v2-5832b8975510acc59e4e79cf89f30221_r.jpg"
    },
    {
      name: "若叶睦",
      roles: ["Guitar"],
      lyricist: false,
      composer: false,
      cost: 3,
      selected: false,
      imgSrc: "https://pic4.zhimg.com/100/v2-59cf4890ff7d350115822ff738be2785_r.jpg"
    },
    {
      name: "海老冢智",
      roles: ["Keyboard"],
      lyricist: false,
      composer: true,
      cost: 3,
      selected: false,
      imgSrc: "https://pic3.zhimg.com/100/v2-563cdfc44556e5265b0ccfc41bd842ae_r.jpg"
    },
    {
      name: "伊之地虹夏",
      roles: ["Drum"],
      lyricist: false,
      composer: false,
      cost: 2,
      selected: false,
      imgSrc: "https://pic4.zhimg.com/100/v2-04936e4f12d87e269b3eadfcb589f44d_r.jpg"
    },
    {
      name: "喜多郁代",
      roles: ["Guitar", "Vocal"],
      lyricist: false,
      composer: false,
      cost: 2,
      selected: false,
      imgSrc: "https://pic2.zhimg.com/100/v2-8c3df74547ca1026ec5a221adca7de1b_r.jpg"
    },
    {
      name: "长崎素世",
      roles: ["Bass"],
      lyricist: false,
      composer: false,
      cost: 2,
      selected: false,
      imgSrc: "https://pic2.zhimg.com/100/v2-190a150d9f8859df910bcad4a93c8017_r.jpg"
    },
    {
      name: "RUPA",
      roles: ["Bass"],
      lyricist: false,
      composer: false,
      cost: 2,
      selected: false,
      imgSrc: "https://pic2.zhimg.com/100/v2-bb0b7bb332655fe8fa523a6e6ba054c1_r.jpg"
    },
    {
      name: "中野梓",
      roles: ["Guitar"],
      lyricist: false,
      composer: false,
      cost: 2,
      selected: false,
      imgSrc: "https://picx.zhimg.com/100/v2-7496a974d03a9041fb5adecb56462c39_r.jpg"
    },
    {
      name: "安和昴",
      roles: ["Drum"],
      lyricist: false,
      composer: false,
      cost: 1,
      selected: false,
      imgSrc: "https://pic2.zhimg.com/100/v2-d044469e577f71cea1b92b14709123eb_r.jpg"
    },
    {
      name: "田井中律",
      roles: ["Drum"],
      lyricist: false,
      composer: false,
      cost: 1,
      selected: false,
      imgSrc: "https://pic3.zhimg.com/100/v2-c26ad20c863ff9759129ef5df89df67c_r.jpg"
    },
    {
      name: "千早爱音",
      roles: ["Guitar"],
      lyricist: false,
      composer: false,
      cost: 1,
      selected: false,
      imgSrc: "https://picx.zhimg.com/100/v2-1a4ee77829b603add2399439525e7d49_r.jpg"
    }
  ];
  