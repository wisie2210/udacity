var counter01 = 0, counter02 = 0;
var cat_01 = "nua"; cat_02 = "gordo";

$(document).ready(function () {

    $(".cat").click(function () {
        var this_cat = this.id;
        switch (this_cat) {
            case "cat01":
                $("#cat_name_01").val(cat_01);
                counter01++;
                $("#cat_counter_01").val(counter01);
                break;
            case "cat02":
                $("#cat_name_02").val(cat_02);
                counter02++;
                $("#cat_counter_02").val(counter02);
                break;
            default:
                break;
        }
    })


});
cat_name