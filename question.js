{ 
    _id: "Q",
  form: [{
    q:"年齢",
    required: true,
    a: {
      type: "number",
      name: "age",
      attr: {
	min: 1,
	max: 100
      }
    }
  },{
    q:"性別",
    required: true,
    a: {
      type: "select",
      name: "sex",
      options:[
	       ["1","男"],
	       ["2","女"]
	       ]
    }
  },{
    q:"職業",
    required: true,
    a: {
      type: "select",
      name: "job",
      options:[
	       ["1","コンピュータエンジニア"],
	       ["2","その他IT関連"],
	       ["3","その他業種"],
	       ["4","学生"],
	       ["5","学生未満"]
	       ]
    }
  },{
    q:"MongoDBを知っていましたか？",
    required: true,
    a: {
      type: "select",
      name: "asYknow",
      options:[
	       ["y","はい"],
	       ["n","いいえ"]
	       ]
    }
  },{
    q:"今までにMongoDBを利用した事がありますか？",
    required: true,
    a: {
      type: "select",
      name: "howLong",
      options:[
	       ["0","いいえ"],
	       ["3","３ヶ月未満"],
	       ["6","半年未満"],
	       ["12","１年未満"],
	       ["99","それ以上"]
	       ]
    }
  },{
    q:"何台程度で運用していますか？",
    a: {
      type: "select",
      name: "howMany",
      options:[
	       ["1","１台"],
	       ["3","３台以下"],
	       ["10","１０台以下"],
	       ["30","３０台以下"],
	       ["99","それ以上:"]
	       ]
    }
  },{
    q:"今後利用しようと思いますか？",
    a: {
      type: "select",
      name: "willUse",
      options:[
	       ["y","はい"],
	       ["n","いいえ"]
	       ]
    }
  },{
    q:"どの様な用途で利用できそうだと思いますか？",
    a: {
      type: "checkbox",
      name: "howToUse",
      others:3,
      options:[
	       ["WEB最との表示データなど"],
	       ["データ集計(Map/Reduce)"],
	       ["携帯ゲームのデータを保存/集計"],
	       ["検索システム"],
	       ["地理データ"]
	       ]
    }
  },{
    q:"その他なにかありましたら",
    a: {
      type: "textarea",
      name: "other",
      attr: {
	maxlength: 1000,
      }
    }
  }]
}