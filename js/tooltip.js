/**
 * Created by freya on 2017/4/17.
 */
$(function () {
    $('svg[data-src]').each(function (index, svg) {
       var src =  $(svg).data('src');
        
        $.ajax({
            url:src,
            dataType:'xml',
            success:function (svgDocument) {
                var $doc = $(svgDocument.documentElement);
                $doc.attr({
                    width:$(svg).attr('width'),
                    height:$(svg).attr('height')
                })

                $(svg).after($doc).remove();
            }
        })
    });
});