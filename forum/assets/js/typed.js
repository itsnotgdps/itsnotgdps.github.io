(function ($) {
    $(document).ready(function () {
        $(".typed").typed({
            stringsElement: $('.typed-strings'),
        });
    });
})(jQuery);

$(".element").typed({
    strings: ["First sentence.", "Second sentence."], // строки для вывода
    stringsElement: null, // вывод текста с использованием html-элементов, к примеру тег <p>
    typeSpeed: 0, // скорость имитации набора текста
    startDelay: 0, // длительность паузы перед началом печати
    backSpeed: 0, // скорост затирания текста
    shuffle: false, // строки в перемешку
    backDelay: 500, // длительность паузы перед стиранием текста
    loop: false, // цикличное повторение
    loopCount: false, // количество итерации, false - бесконечно
    showCursor: true, // показ курсора при наборе
    cursorChar: "|", // символ в качестве курсора
    attr: null, // смена текста в атрибуте (null — текст в самом элементе)
    contentType: 'html', // Формат текста html/text
    callback: function () {}, // обработчик события по завершению печати
    preStringTyped: function () {}, // обработчик события перед началом печати
    onStringTyped: function () {}, // обработчик события для каждой напечатанной строки
    resetCallback: function () {} // обработчик события при сбросе $(".element").typed('reset')
});

$(".element").typed({
    strings: ["First ^1000 sentence.", "Second sentence."]
});