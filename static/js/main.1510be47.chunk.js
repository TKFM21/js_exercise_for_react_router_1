(this.webpackJsonpjs_exercise_for_react_router_1=this.webpackJsonpjs_exercise_for_react_router_1||[]).push([[0],{40:function(e,t,n){e.exports=n(72)},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(31),u=n.n(c),i=(n(45),n(7)),s=n(8);n(46),n(47);var o=function(e){return a.a.createElement("div",{className:"btn"},e.children)};n(48);var l=function(){return a.a.createElement("div",{className:"home"},a.a.createElement("h1",null,"Home"),a.a.createElement(i.b,{to:"/quiz/"},a.a.createElement(o,null,"Quiz\u3078")))},h=n(5),f=n.n(h),m=n(9),d=n(11),p=n(12),v=n(38),w=n(34),E=n(14),b=n(39),z=n(37),q=n(35),k=n.n(q),x=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,null,[{key:"fetch",value:function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://opentdb.com/api.php?amount=10&type=multiple");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),O=n(36),j=n.n(O),A=n(15),_=n.n(A),y=function(){function e(t){var n=t.question,r=t.correctAnswer,a=t.incorrectAnswers;Object(d.a)(this,e),this._question=n,this._correctAnswer=r,this._incorrectAnswers=a}return Object(p.a)(e,[{key:"shuffledAnswers",value:function(){return j.a.shuffle([this._correctAnswer].concat(Object(z.a)(this._incorrectAnswers)))}},{key:"question",get:function(){return this._question}},{key:"correctAnswer",get:function(){return this._correctAnswer}}],[{key:"quizFetchAndCreateQuizInstances",value:function(){var t=Object(m.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.fetch();case 2:return n=t.sent,t.abrupt("return",n.map((function(t){return new e({question:_.a.decode(t.question),correctAnswer:_.a.decode(t.correct_answer),incorrectAnswers:t.incorrect_answers.map((function(e){return _.a.decode(e)}))})})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),e}(),g=(n(71),function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(v.a)(this,Object(w.a)(t).call(this,e))).state={currentIndex:0,numberOfCorrected:0,quizzes:[]},n.quizFetch=n.quizFetch.bind(Object(E.a)(n)),n}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.quizFetch();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"quizFetch",value:function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({currentIndex:0,numberOfCorrected:0,quizzes:[]}),e.next=3,y.quizFetchAndCreateQuizInstances();case 3:t=e.sent,this.setState({quizzes:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"judgeAndNextQuiz",value:function(e,t){var n=this.state,r=n.numberOfCorrected,a=n.currentIndex;e.correctAnswer===t?(r++,window.alert("\u6b63\u89e3\uff01\uff01")):window.alert("\u9593\u9055\u3044\uff01\uff01 \u6b63\u89e3\u306f\uff1a".concat(e.correctAnswer)),a++,this.setState({numberOfCorrected:r,currentIndex:a})}},{key:"render",value:function(){var e=this.state,t=e.quizzes,n=e.currentIndex,r=e.numberOfCorrected;if(!t.length&&!n)return this.loadingRender();if(t.length>0&&n<t.length-1){var c=t[n];return this.quizRender(c)}return a.a.createElement("div",null,a.a.createElement("h1",null,"Quiz"),a.a.createElement("h2",null,"Result"),a.a.createElement("h3",null,r,"/",t.length),a.a.createElement("div",{onClick:this.quizFetch},a.a.createElement(o,null,"Restart")),a.a.createElement("hr",null),a.a.createElement(i.b,{to:"/"},"Home\u3078"))}},{key:"loadingRender",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Quiz"),a.a.createElement("p",null,"Now Loading..."),a.a.createElement("hr",null),a.a.createElement(i.b,{to:"/"},"Home\u3078"))}},{key:"quizRender",value:function(e){var t=this,n=e.shuffledAnswers().map((function(n,r){return a.a.createElement("li",{key:r,onClick:function(){return t.judgeAndNextQuiz(e,n)}},a.a.createElement(o,null,n))}));return a.a.createElement("div",null,a.a.createElement("h1",null,"Quiz"),a.a.createElement("h2",null,e.question),a.a.createElement("ul",{className:"answers"},n),a.a.createElement("hr",null),a.a.createElement(i.b,{to:"/"},"Home\u3078"))}}]),t}(a.a.Component));var C=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(i.a,null,a.a.createElement(s.a,{path:"/",exact:!0,component:l}),a.a.createElement(s.a,{path:"/quiz/",exact:!0,component:g})))};u.a.render(a.a.createElement(C,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1510be47.chunk.js.map