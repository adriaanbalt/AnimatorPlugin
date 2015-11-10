
/**
 * @name Animator.main
 * @author Adriaan Scholvinck | adriaan.scholvinck@AKQA.com
 * @description Animation tool Example
 */


;(function() {

	new window.Animator(
		[{
			'id' : 'gearvr-animate',
			'startAt' : 0,
			'endAt' : 100,
			onKeyframes :
			[
				{
					position: 0,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 800,
						left: window.innerWidth
					}
				},
				{
					position: 1,
					ease: TWEEN.Easing.Quadratic.EaseIn,
					properties: {
						top: 800,
						left: 0
					}
				}
			]
		}]
	);


})();

