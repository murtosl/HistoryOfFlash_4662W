var slideMenu=function(){ //This calculates the width of items in the navigation.
	var sp,st,t,m,sa,l,w,sw, pg;
	return{
		build:function(sm,sw,mt,s,sl,h, p){
			sp=s; st=sw; t=mt; pg = p;
			m=document.getElementById(sm);
			sa=m.getElementsByTagName('li');
			l=sa.length; w=m.offsetWidth; sw=w/l;
			ot=Math.floor((w-st)/(l-1)); var i=0;
			sa[pg].id = "currentPage"
			for(i;i<l;i++){s=sa[i]; s.style.width=sw+'px'; this.timer(s)}
			if(sl!=null){m.timer=setInterval(function(){slideMenu.slide(sa[sl-1])},t)}
		},
		timer:function(s){s.onmouseover=function(){clearInterval(m.timer);m.timer=setInterval(function(){slideMenu.slide(s)},t)}},
		slide:function(s){
			if(s == undefined || s == null) {
				s = sa[pg];
			} 
			var cw=parseInt(s.style.width,'10');
			
			if(cw<st){
				
				var owt=0; var i=0;
				for(i;i<l;i++){
					if(sa[i]!=s) {
						var o,ow; var oi=0; o=sa[i]; ow=parseInt(o.style.width,'10');
						if(ow>ot){oi=Math.floor((ow-ot)/sp); oi=(oi>0)?oi:1; o.style.width=(ow-oi)+'px'}
						owt=owt+(ow-oi)
						sa[i].className = "rotatedText";
						s.className = "";
					}
				}
				s.style.width=(w-owt)+'px';
				
			}else{
				clearInterval(m.timer);
			}
			
		}
	};
}();