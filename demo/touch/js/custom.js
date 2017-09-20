$(document).ready(function() {
    setTimeout(function() {
        $('.mp_loading').hide();
        $(".wp").show();
    }, 2000);

    jQuery(function() {
        var slider = new SliderUnlock("#slider", {}, function() {
            $(".p1").addClass("a-fadeOut-1");
            setTimeout(function() {
                $(".p1").addClass("hide");
                $(".p2").removeClass("hide").addClass(
                    "on");
                one();
            }, 1000);
        }, function() {
            jQuery(".warn").text("index:" + slider.index + "， max:" + slider.max + ",lableIndex:" + slider.lableIndex + ",value:" + jQuery("#lockable").val() + " date:" + new Date().getUTCDate());
        });
        slider.init();
    });
});


function one() {
    if ($(".p2").hasClass("on")) {
        setTimeout(function() {
            $(".p2-3").addClass("a-fadeOut-1");
            $(".p2-4").removeClass("hide");
            setTimeout(function() {
                $(".p2-4").addClass("a-fadeOut-1");
                $(".p2-5").removeClass("hide");
                setTimeout(function() {
                    $(".p2-5").addClass("a-fadeOut-1");
                    $(".p2-6").removeClass("hide");
                    $(".p2-1").removeClass("hide");
                    $(".p2-7").removeClass("hide");
                    two();
                }, 4000);
            }, 4000);
        }, 4000);
    }
}

function two() {
    $(".p2-7").tap(function() {
        $(".p2").removeClass("on").addClass("a-fadeOut-1");
        setTimeout(function() {
            $(".p2").addClass("hide");
            $(".p3").removeClass("hide").addClass("on");
            three();
        }, 1000);
    });
}


function three() {
    var mark = 1;
    $(".p3-9").tap(function() {
        if (mark == 1) {
            $(".p3-on1").removeClass("hide");
            mark = 2;
        } else if (mark == 2) {
            $(".p3-on1").addClass("a-fadeOut-1");
            $(".p3-on2").removeClass("hide");
            mark = 3;
        } else if (mark == 3) {
            $(".p3-on2").addClass("a-fadeOut-1");
            $(".p3-on3").removeClass("hide");
            mark = 4;
        } else if (mark == 4) {
            $(".p3-on3").addClass("a-fadeOut-1");
            $(".p3-on4").removeClass("hide");
            mark = 5;
        } else if (mark == 5) {
            $(".p3-on4").addClass("a-fadeOut-1");
            $(".p3-on5").removeClass("hide");
            mark = 6;
        } else if (mark == 6) {
            $(".p3-on5").addClass("a-fadeOut-1");
            $(".p3-on6").removeClass("hide");
            mark = 7;
        } else if (mark == 7) {
            $(".p3").removeClass("on").addClass("a-fadeOut-1");
            setTimeout(function() {
                $(".p3").addClass("hide");
                $(".p4").removeClass("hide").addClass("on");
                four();
            }, 1000);
        }
    });
}

function four() {
    setTimeout(function() {
        $(".p4").removeClass("on").addClass("a-fadeOut-1");
        setTimeout(function() {
            $(".p4").addClass("hide");
            $(".p5").removeClass("hide").addClass("on");
            five1();
        }, 1000);
    }, 6000);
}

function five1() {
    setTimeout(function() {
        var n1 = $(".n1");
        var timer = setInterval((function(a) {
            return function() {
                if (a <= 3000) {
                    n1.html(a++ + "+");
                } else {
                    clearInterval(timer);
                }
            };
        })(2800), 1);
    }, 3000);
    setTimeout(function() {
        var n2 = $(".n2");
        var timer = setInterval((function(a) {
            return function() {
                if (a <= 1000) {
                    n2.html(a++ + "+");
                } else {
                    clearInterval(timer);
                }
            };
        })(800), 1);
    }, 4000);
    setTimeout(function() {
        $(".p5").removeClass("on").addClass("a-fadeOut-1");
        setTimeout(function() {
            $(".p5").addClass("hide");
            $(".p52").removeClass("hide").addClass("on");
            five2();
        }, 1000);
    }, 8000);
}

function five2() {
    setTimeout(function() {
        setTimeout(function() {
            var n1124 = $(".n2-4");
            var timer1124 = setInterval((function(a) {
                return function() {
                    if (a <= 10) {
                        n1124.html(a++ + "位");
                    } else {
                        clearInterval(timer1124);
                    }
                };
            })(1), 15);
            var n1125 = $(".n2-5");
            var timer1125 = setInterval((function(a) {
                return function() {
                    if (a <= 20) {
                        n1125.html(a++ + "位");
                    } else {
                        clearInterval(timer1125);
                    }
                };
            })(1), 15);
            var n1126 = $(".n2-6");
            var timer1126 = setInterval((function(a) {
                return function() {
                    if (a <= 151) {
                        n1126.html(a++ + "位");
                    } else {
                        clearInterval(timer1126);
                    }
                };
            })(70), 1);
            var n1127 = $(".n2-7");
            var timer1127 = setInterval((function(a) {
                return function() {
                    if (a <= 24) {
                        n1127.html(a++ + "位");
                    } else {
                        clearInterval(timer1127);
                    }
                };
            })(1), 15);
            var n1128 = $(".n2-8");
            var timer1128 = setInterval((function(a) {
                return function() {
                    if (a <= 50) {
                        n1128.html(a++ + "位");
                    } else {
                        clearInterval(timer1128);
                    }
                };
            })(1), 15);
            var n22 = $(".n2-9");
            var timer22 = setInterval((function(a) {
                return function() {
                    if (a <= 210) {
                        n22.html(a++);
                    } else {
                        clearInterval(timer22);
                    }
                };
            })(100), 1);
            $(".p5-2-10").hide();
        }, 1000);
        $(".p5-2-11").addClass("a-toup-1");
        setTimeout(function() {
            $(".p52").removeClass("on").addClass("a-fadeOut-1");
            setTimeout(function() {
                $(".p52").addClass("hide");
                $(".p53").removeClass("hide").addClass("on");
                five3();
            }, 1000);
        }, 3000);
    }, 2000);
}

function five3() {
    setTimeout(function() {
        var n13 = $(".n3-1");
        var timer13 = setInterval((function(a) {
            return function() {
                if (a <= 77768) {
                    n13.html(a++ + "<span>次</span>");
                } else {
                    clearInterval(timer13);
                }
            };
        })(77688), 1);
    }, 4000);
    setTimeout(function() {
        var n211 = $(".n3-2");
        var timer2 = setInterval((function(a) {
            return function() {
                if (a <= 239) {
                    n211.html(a++ + "<span>次</span>");
                } else {
                    clearInterval(timer2);
                }
            };
        })(1), 1);
    }, 6000);
    setTimeout(function() {
        $(".p53").removeClass("on").addClass("a-fadeOut-1");
        setTimeout(function() {
            $(".p53").addClass("hide");
            $(".p6").removeClass("hide").addClass("on");
            six();
        }, 2000);
    }, 8000);
}


function six() {
    setTimeout(function() {
        $(".p6").removeClass("on").addClass("a-fadeOut-1");
        setTimeout(function() {
            $(".p6").addClass("hide");
            $(".p7").removeClass("hide").addClass("on");
            seven();
        }, 1000);
    }, 7000);
}

function seven() {
    setTimeout(function() {
        var n1 = $(".n7-1");
        var timer1 = setInterval((function(a) {
            return function() {
                if (a <= 2500) {
                    n1.html(a++ + "万" + "<br>次");
                } else {
                    clearInterval(timer1);
                }
            };
        })(2400), 1);
    }, 4000);
    setTimeout(function() {
        var n2 = $(".n7-2");
        var timer2 = setInterval((function(a) {
            return function() {
                if (a <= 770) {
                    n2.html(a++ + "万" + "<br>次");
                } else {
                    clearInterval(timer2);
                }
            };
        })(670), 1);
    }, 5000);
    setTimeout(function() {
        var n3 = $(".n7-3");
        var timer3 = setInterval((function(a) {
            return function() {
                if (a <= 670) {
                    n3.html(a++ + "万" +  "<br>次");
                } else {
                    clearInterval(timer3);
                }
            };
        })(650), 1);
    }, 6000);
    setTimeout(function() {
        $(".p7").removeClass("on").addClass("a-fadeOut-1");
        $(".p7").addClass("hide");
        $(".p8-f").removeClass("hide").addClass("on");
        eightf();
    }, 8000);
}



function eightf() {
    setTimeout(function() {
        $(".p8-f").removeClass("on").addClass("a-fadeOut-1");

        $(".p8-f").addClass("hide");
        $(".p8-x").removeClass("hide").addClass("on");
        eightx();
    }, 6000);
}


function eightx() {
    setTimeout(function() {
        $(".p8-x").removeClass("on").addClass("a-fadeOut-1");

        $(".p8-x").addClass("hide");
        $(".p8-z").removeClass("hide").addClass("on");
        eightz();
    }, 6000);
}


function eightz() {
    setTimeout(function() {
        $(".p8-z-2").removeClass("hide");
    }, 1000);
    setTimeout(function() {
        $(".p8-z").removeClass("on").addClass("a-fadeOut-1");
        $(".p8-z").addClass("hide");
        $(".p8-2").removeClass("hide").addClass("on");
        eight2();
    }, 6000);
}

function eight2() {
    setTimeout(function() {
        $(".p8-2").removeClass("on").addClass("a-fadeOut-1");
        setTimeout(function() {
            $(".p8-2").addClass("hide");
            $(".p8-3").removeClass("hide").addClass("on");
            eight3();
        }, 2000);
    }, 6000);
}




function eight3() {
    setTimeout(function() {
        $(".p8-3-2").addClass("hide");
        $(".p8-3-3").removeClass("hide").addClass("a-zoomIn-1");
        setTimeout(function() {
            $(".p8-3").removeClass("on").addClass("a-fadeOut-1");

            $(".p8-3").addClass("hide");
            $(".p8-4").removeClass("hide").addClass("on");
            eight4();

        }, 2000);
    }, 4000);
}


function eight4() {
    setTimeout(function() {
        $(".p8-4-3").addClass("hide");
        $(".p8-4-4").removeClass("hide").addClass("a-zoomIn-1");
        setTimeout(function() {
            $(".p8-4-4").addClass("hide");
            $(".p8-4-5").removeClass("hide").addClass("a-zoomIn-1");
            setTimeout(function() {
                $(".p8-4").removeClass("on").addClass("a-fadeOut-1");

                $(".p8-4").addClass("hide");
                $(".p8-5").removeClass("hide").addClass("on");
                eight5();

            }, 3000);
        }, 2000);
    }, 4000);
}

function eight5() {
    setTimeout(function() {
        $(".p8-5").removeClass("on").addClass("a-fadeOut-1");

        $(".p8-5").addClass("hide");
        $(".p8-6").removeClass("hide").addClass("on");
        eight6();

    }, 5000);
}

function eight6() {
    setTimeout(function() {
        $(".p8-6-3").addClass("hide");
        $(".p8-6-4").removeClass("hide").addClass("a-zoomIn-1");
        setTimeout(function() {
            $(".p8-6").removeClass("on").addClass("a-fadeOut-1");
            setTimeout(function() {
                $(".p8-6").addClass("hide");
                $(".p9").removeClass("hide").addClass("on");
                nine();
            }, 2000);
        }, 4000);
    }, 4000);
}

function nine() {
    setTimeout(function() {
        $(".p9").removeClass("on").addClass("a-fadeOut-1");
        setTimeout(function() {
            $(".p9").addClass("hide");
            $(".p10").removeClass("hide").addClass("on");
        }, 2000);
    }, 8000);
}
