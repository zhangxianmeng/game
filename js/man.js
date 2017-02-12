/**
 * Created by xianmeng.zhang on 2016/1/5.
 */
//loading...
function showPage(){
  $('#divPageLoading').remove();
  $('.wrap').show();
}
$(function(){
  //���ӳ���
  function m_come() {
    var dtd = $.Deferred(); // ����Deferred����
    $(".monkey").addClass('walk');
    $(".sheep").addClass('sheep_moren');
    $(".monkey").animate({//�����߳���
      left: "0rem"
    }, 3000, function() {
      $("#background").animate({//�ڶ���
        left: "-100%"
      }, 3500, function(){
        $(".monkey").addClass('pauseWalk');
        setTimeout(function(){
          $('.ear').addClass('ear_shansuo');
        },1500);
        setTimeout(function(){
          $(".monkey").removeClass().addClass('monkey walk');
          $('.monkey').animate({
            left: "2rem"
          },1500,function(){
            $('.bg_02').addClass('bg_02_scale');
            $('.bg_01').empty();//��յ�һ��
            $(".monkey").removeClass().addClass('monkey happying');//高兴表情
            setTimeout(function(){
              $('.fengmi').slideDown(300);
            },500);
            setTimeout(function(){
              $('.fengmi').slideUp(300);
              $(".monkey").removeClass().addClass('monkey monkey_eat');//͵�Է���
            },2900);
            setTimeout(function(){
              dtd.resolve();
            },5000);
          });
        },3500)
      })

    });
    return dtd.promise();
  }
  //�������۷�
  function doudong() {
    var dtd = $.Deferred();
      $('.fengwo').addClass('fengwo-dong');//���Ѷ���
      setTimeout(function(){
        $('.mifeng').animate({//�۷�showtime
          'top': '4rem',
          'left': '3.5rem',
          'opacity':1
        },1000,function(){//生气中
          $('.mifeng').addClass('mifeng_scale');
          setTimeout(function(){
            $('.mifeng').animate({
              'top': '4.7rem',
              'left': '2.6rem'
            },800,function(){
              $('.mifeng').addClass('mifeng_zha');
              setTimeout(function(){
                $('.mifeng').removeClass().addClass('mifeng mifeng_out');
                $('.monkey').removeClass().addClass('monkey position');//ʹ�����
                $('.yanlei').addClass('yanlei_dong');
                      setTimeout(function(){
                        $('.bg_02').removeClass().addClass('bg_02 bg_02_scale_old');
                      },1000);
                      setTimeout(function(){
                        dtd.resolve();
                      },3000);
              },1000);

            })
          },1000)
        });
      },1500)
    return dtd.promise();
  }

  function mon_run(){
    var dtd = $.Deferred(); // ����Deferred����
      $('.monkey').removeClass().addClass('monkey mon-run');
      $('.mon-run').animate({
        'left': '0rem'
      },3000,function(){
        $('.mon-run').addClass('pauseWalk');
        setInterval(function(){
          $('.pauseWalk').removeClass().addClass('monkey monkey_help');
        },1000);
        setTimeout(function(){
          dtd.resolve();
        },4000)
      });
      $("#background").animate({//�����ͬ��ִ��
        'left':'-200%'
      },3000,function(){
        $('.bg_02').empty();
      });
    return dtd.promise();
  }

  //��ʩ������
  function sheep_paly(){
    var dtd = $.Deferred();
    $('.sheep').removeClass().addClass('sheep sheep_smail');
    setTimeout(function(){
      $('.sheep').addClass('sheep-dong');
      setInterval(function(){
        dtd.resolve();
      },2000);
    },1500);

    return dtd.promise();
  }
  //���˳�
  function sheep_out(){
    var dtd = $.Deferred();
    $('.guang').addClass('guang-dong');
    setTimeout(function(){
      $('.guang').fadeOut(500,function(){
        $('.red').fadeIn(1000,function(){
          $('.red').addClass('red_big');
          setTimeout(function(){
          dtd.resolve();
        },1000)
        });
        
      });
    },2000);

    return dtd.promise();
  }
  //end
  function end(){
    var dtd = $.Deferred();
    //红包雨
    $(document).snowfall('clear');
    $(document).snowfall({
      image: "img/red.png",
      flakeCount:10,
      minSize: 22,
      maxSize: 44
    });
   
    $('.sheep').remove();
    $('.monkey').removeClass().addClass('monkey monkey_kanfen');
    $('.monkey').animate({
      'opacity':0
    },4000,function(){
      $(this).remove();
    })
      $('.red').fadeOut(1000,function(){
        setTimeout(function(){
          $('.sun').hide(500,function(){
            $(this).remove();
          });
          $('.bg_03').addClass('change_bg_2');
        },300);
        dtd.resolve();
      });
    return dtd.promise();
  }


  //��������
  $.when(m_come()).
    then(function(){
      return doudong();
    }).
    then(function(){
      return mon_run();
    }).then(function(){
      return sheep_paly();
    }).then(function(){
      return sheep_out();
    }).then(function(){
      return end();
    });

});