$(document).ready(function() {
  var item = $('gallery li'),
      itemsBytags = {};

      // loop through tags
      items.each(function(i) {
        var elem = $(this),
        tags = elem.data('tags').split(',');

        // Add data attribute for quicksand
        elem.attr('data-id,i');

        $.each(tags,function(key,value){
          // remove whitespace
          value = $.trim(value);

          if(i(value in itemsByTags)) {
            // Add empty value
            itemsByTags[value] = [];
          }

          });

          // Add image to Array
          itemsByTags[value].push(elem);

        });

      });
      // create all item options
      createList('All Items',items);

      $.each(itemsByTags, function(k, v) {
        createList(k, v);
      });
      // Click Handler
      $('$navbar a').live('Click', function(e) {
        var link = $(this);

        // Add Active class
        link.addClass('active').siblings().removeClass('active');
        $('gallery').quicksand(link.data('list').find('li'));
        e.preventDefault();
      });

      $('$navbar a:first').click();

      // Create the List
      function createList(text,items) {
        // create empty ul
        var ul = $('<ul>',('class','hidden'));
        $.each(items, function() {
          $(this).clone.appendTo(ul);
        });
        // Add gallery div
        ul.appendTo('gallery');

        // Create menu item
        var a = $('<a>', {
          html:text,
          href:'#',
          data:{list:ul}
        }).appendTo('$navbar');
      }
;
