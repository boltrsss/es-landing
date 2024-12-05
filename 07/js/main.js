$(document).ready(function () {
	document.getElementById("step_id_1").innerHTML = '#1 APP<br>en España';
	document.getElementById("step_id_2").innerHTML = '¿Alguna vez has usado una aplicación de citas?';
	document.getElementById("step_id_3").innerHTML = '#1 APP<br>en España';
	document.getElementById("step_id_4").innerHTML = '¿Tendrías sexo con una mujer que vive cerca de ti?';
	document.getElementById("step_id_5").innerHTML = '#1 APP<br>en España';
	document.getElementById("step_id_6").innerHTML = '¿Prometes mantener las fotos que recibes en privado?';
	document.getElementById("step_id_7").innerHTML = '#1 APP<br>en España';
	document.getElementById("step_id_8").innerHTML = 'Comprobación de compatibilidad...';
	document.getElementById("step_id_9").innerHTML = '¡Genial! Creemos que encajas perfectamente.';
	document.getElementById("step_id_10").innerHTML = '<p>Está listo para ver los perfiles cerca de tu área.</p>\n' +
		'                <p>Recuerda, estos son miembros reales que quieren ser tratados con respeto tal como quieres que te traten a ti.</p>\n' +
		'                <p>Sea abierto y diviértete.</p>';

});
$(function () {
	var progressTime = 6000;

	function stepProgess() {
		setTimeout(function () {
			$('.box.js-step4').slideUp(800);
			setTimeout(function () {
				$('button[data-step="js-step5"]').trigger('click');
			}, 800)
		}, progressTime)
		return;
	}

	$('button[data-step]').click(function () {
		var $nextStep = $(this).attr('data-step');

		if (!$nextStep)
			return false;

		$(this).closest('.js-step').fadeOut(200, function () {
			$('.wrapper-image').addClass('hide-mobile-small');
			$(document).find('.js-step.' + $nextStep).fadeIn(100, function () {
				if ($nextStep == 'js-step4') {
					$('.progress-bar').addClass('active');
					stepProgess();
				}
			});
		});
	});

	$('.js-select-list li').on('click', function () {
		var countSelected = $(this).parent().find('li.active').length;
		if (countSelected >= 3 && !$(this).hasClass('active')) {
			return false;
		}

		$(this).toggleClass('active');
	});
});
