
/**
 * @name Animator.main
 * @author Adriaan Scholvinck | adriaan.scholvinck@AKQA.com
 * @description Animation tool Example
 */


;(function() {

	new window.Animator(
		[{
			'id' : 'shoe',
			'startAt' : 2400,
			'endAt' : 2900,
			onProgress : function( anim, progress ) {

				var endFrame = (document.getElementById('shoe').children.length),
				toFrame = Math.floor(progress*endFrame);// % endFrame;
				// toFrame = (toFrame < 0 ? 0 : toFrame);
				var i = endFrame-1;
				console.log (progress, toFrame, endFrame );
				// clear classes from all elements
				while ( i>=0 ){
					document.getElementById('shoe').children[i].classList.add('hidden');
					i--;
				}
				// add class to the element in the sequence you want to show
				document.getElementById('shoe').children[toFrame].classList.remove('hidden');
				console.log ( document.getElementById('shoe').children[toFrame] );
			},
			// onProgress : { func: 'sequence', opt: { elem: document.getElementById('phone'), end: 1 } },
			onKeyframes :
			[
				{
					position: 0,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 2800, left: 600
					}
				},
				{
					position: 1,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 2800, left: 700
					}
				}
			]
		},
		{
			'id' : 'necklace',
			'startAt' : 0,
			'endAt' : 500,
			onKeyframes :
			[
				{
					position: 0,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 0,
						right: 0
					}
				},
				{
					position: 1,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 20,
						right: -40
					}
				}
			]
		},
		{
			'id' : 'bracelet',
			'startAt' : 0,
			'endAt' : 1500,
			onKeyframes :
			[
				{
					position: 0,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 700,
						right: -50
					}
				},
				{
					position: 1,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 600,
						right: 0
					}
				}
			]
		},
		{
			'id' : 'scarf',
			'startAt' : 450,
			'endAt' : 1900,
			onKeyframes :
			[
				{
					position: 0,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						left: -50
					}
				},
				{
					position: 1,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						left: 50
					}
				}
			]
		},
		{
			'id' : 'quote',
			'startAt' : 700,
			'endAt' : 2000,
			onKeyframes :
			[
				{
					position: 0,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 1600,
						right: -10
					}
				},
				{
					position: 1,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 1400,
						right: 30
					}
				}
			]
		},
		{
			'id' : 'bag',
			'startAt' : 3000,
			'endAt' : 4500,
			onKeyframes :
			[
				{
					position: 0,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 3700,
						left: -100
					}
				},
				{
					position: 1,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 3750,
						left: -50
					}
				}
			]
		}]
	);


	new window.Animator(
		{
			'id' : 'scarf-big',
			'startAt' : 3500,
			'endAt' : 6500,
			onKeyframes :
			[
				{
					position: 0,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 4450
					}
				},
				{
					position: 1,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 4750
					}
				}
			]
		}
	);



})();

