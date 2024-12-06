<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
<script>
window.addEventListener("load", function(){
	let body=document.body;
	let tab=document.querySelector("#start .tab");
	let dim=document.querySelector(".dim");
	let mobile=document.querySelector("#mobile");
	let w;

	/*사용자가 tab을 클릭하면 menu open(add)*/
	tab.addEventListener("click", function(e){
		e.preventDefault();
	
		if(tab.classList.contains("close") == false){ /*open*/
			body.classList.add("active");
			dim.classList.add("active");
			tab.classList.add("close");
			// #moblie add
			gsap.to(tab, { x: -240, duration: 0.3 }); // x: -240 -> translateX
			gsap.to(mobile, {  opacity:1, right:0, duration:0.3 });
		}
		else{ /*close*/
			body.classList.remove("active");
			dim.classList.remove("active");
			tab.classList.remove("close");
			// #moblie remove
			gsap.to(tab, { x: 0, duration: 0.3 });
			gsap.to(mobile, { opacity:0, right:-240, duration:0.3 });
		}
	});

	/*사용자가 흐린 배경(dim)을 클릭하면 모바일 메뉴가 닫히고(remove) 배경이 원래대로 돌아옵니다.*/
	dim.addEventListener("click", function(e){
		e.preventDefault();

		body.classList.remove("fixed");
		mobile.classList.remove("active");
		dim.classList.remove("active");
	});

	window.addEventListener("resize", function(){
		console.log(innerWidth);
		//460 보다 창 화면이 커지면 모든 클래스를 제거해 #mobile이 아닌 #desktop으로 돌아가게 한다.
		if(window.innerWidth > 460){
			if(mobile.classList.contains("active")){
				body.classList.remove("fixed");
				dim.classList.remove("active");
				tab.classList.remove("close");
				mobile.classList.remove("active");
				
			}
		}
	});
});
</script>