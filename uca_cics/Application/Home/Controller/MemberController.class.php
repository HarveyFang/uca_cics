<?php
namespace Home\Controller;
use Think\Controller;
class MemberController extends Controller {

	//初始化
	public function _initialize(){
		if(!check_login()){
			header('Location:/Login/index'); 
		}
	}

	//首页
    public function index(){
    	$this->member_list_show();
    }

	//显示客户列表
    public function member_list_show(){
        $data_P     =   I('post.');
        $map        =   array();
        $map['deleted']  =   '0';
        if(!empty($data_P['name'])){
            $map['name']    =   array('like','%'.$data_P['name'].'%');
        }
        if(!empty($data_P['phone'])){
            $map['phone']    =   array('like','%'.$data_P['phone'].'%');
        }
        if(!empty($data_P['city_history'])){
            $map['city_history']    =   array('like','%'.$data_P['city_history'].'%');
        }
        if(!empty($data_P['appraise'])){
            $map['appraise']    =   $data_P['appraise'];
        }
        $data_P['age_min']    =   empty($data_P['age_min'])?1:$data_P['age_min'];
        $data_P['age_max']    =   empty($data_P['age_max'])?99:$data_P['age_max'];
        $map['age']    =   array('between',array($data_P['age_min'],$data_P['age_max']));
        // print_r($map);
    	$M_member 		= M('member');
		$count 			= $M_member->where($map)->count();
		$Page 			= new \Think\Page($count,10);
		$show 			= $Page->show();
		$member_list 	= $M_member->where($map)->order('id desc')->limit($Page->firstRow.','.$Page->listRows)->select();
		$this->assign('member_list',$member_list);
        $this->assign('page',$show);
        $this->assign('data_P',$data_P);
        $this->display('member_list');
    }
    
	//显示新增客户
    public function member_add_show(){
    	$this->display('member_add');
    }

	//新增客户
    public function member_add(){
    	$data_P = I('post.');
    	if(!empty($data_P)&&!empty($data_P['name'])){
    		$data 	=	array();
    		$data['name'] 				=	$data_P['name'];
    		$data['age'] 				=	$data_P['age'];
    		$data['work'] 				=	$data_P['work'];
    		$data['address'] 			=	$data_P['address'];
    		$data['visa_history'] 		=	$data_P['visa_history'];
            $data['purpose']        	=   $data_P['purpose'];
            $data['phone']          	=   $data_P['phone'];
            $data['city_history']   	=   $data_P['city_history'];
            $data['remark_copywriter']  =   $data_P['remark_copywriter'];
            $data['remark_consultant']  =   $data_P['remark_consultant'];
            $data['remark_admin']       =   $data_P['remark_admin'];
            $data['en_proficiency']     =   $data_P['en_proficiency'];
            $data['abroad_baby']        =   $data_P['abroad_baby'];
            $data['married']            =   $data_P['married'];
            $data['appraise']           =   $data_P['appraise'];
    		$result = M('member')->add($data);
    		if(empty($result)){
    			$this->error('保存失败！','/Member/member_add_show');
    		}else{
    			// $this->success('保存成功！','/Member/child_add_show?p_id='.$result);
                header("Location: /Member/child_add_show?p_id=".$result); 
    		}
    	}else{
    		$this->member_list_show();
    	}
    }

    //显示编辑客户
    public function member_edit_show(){
    	$data_G = I('get.');
    	if(!empty($data_G['id'])){
			$id 		= $data_G['id'];
    		$member 	= M('member')->where(array('id'=>$id))->find();
    		if(!empty($member)){
                $child_list     = M('member_child')->where(array('parent_id'=>$id))->select();
                $this->assign('member',$member);
                $this->assign('child_list',$child_list);
    			$this->display('member_edit');
    		}else{
    			$this->error('查无此客户！','/Member/member_list_show');
    		}
    	}else{
    		$this->error('查无此客户！','/Member/member_list_show');
    	}
    }

    //编辑客户
    public function member_edit(){
		$data_P = I('post.');
		if(!empty($data_P)){
			$id 		= $data_P['id'];
    		$member 	= M('member')->where(array('id'=>$id))->find();
    		if(!empty($member)){
	    		$data 	=	array();
	    		$data['name'] 				=	$data_P['name'];
	    		$data['age'] 				=	$data_P['age'];
	    		$data['work'] 				=	$data_P['work'];
                $data['remark_copywriter']  =   $data_P['remark_copywriter'];
                $data['remark_consultant']  =   $data_P['remark_consultant'];
                $data['remark_admin']       =   $data_P['remark_admin'];
                $data['en_proficiency']     =   $data_P['en_proficiency'];
                $data['abroad_baby']        =   $data_P['abroad_baby'];
                $data['married']            =   $data_P['married'];
                $data['appraise']           =   $data_P['appraise'];
                if(!empty($data_P['address'])){
                    $data['address'] 		=	$data_P['address'];
                }
	    		$data['visa_history'] 	=	$data_P['visa_history'];
	    		$data['purpose'] 		=	$data_P['purpose'];
                if(!empty($data_P['phone'])){
                    $data['phone']          =   $data_P['phone'];
                }
	    		$data['city_history'] 	=	$data_P['city_history'];
	    		$result = M('member')->where(array('id'=>$id))->save($data);
	    		if(empty($result)){
	    			$this->error('更新失败！','/Member/member_list_show');
	    		}else{
	    			$this->success('更新成功！','/Member/member_list_show');
	    		}
    		}else{
	    		$this->error('查无此客户！','/Member/member_list_show');
	    	}
		}else{
			$this->error('查无此客户！','/Member/member_list_show');
		}
    }

    //删除客户
    public function member_delete(){
    	$data_G = I('get.');
    	if(!empty($data_G['id'])){
			$id 		= $data_G['id'];
    		$result 	= M('member')->where(array('id'=>$id))->save(array('deleted'=>'1'));
    		if(!empty($result)){
    			$this->success('删除成功！','/Member/member_list_show');
    		}else{
    			$this->error('查无此客户！','/Member/member_list_show');
    		}
    	}else{
    		$this->error('查无此客户！','/Member/member_list_show');
    	}
    }

    //显示客户详情
    public function member_info(){
    	$data_G = I('get.');
    	if(!empty($data_G['id'])){
			$id 		= $data_G['id'];
    		$member 	= M('member')->where(array('id'=>$id))->find();
    		if(!empty($member)){
                $child_list     = M('member_child')->where(array('parent_id'=>$id))->select();
    			$this->assign('member',$member);
                $this->assign('child_list',$child_list);
    			$this->display('member_info');
    		}else{
    			$this->error('查无此客户！','/Member/member_list_show');
    		}
    	}else{
    		$this->error('查无此客户！','/Member/member_list_show');
    	}
    }

    //导出客户信息Excel
    public function excel_out(){
    	$filename="美加澳客户信息".date('Y-m-d H:i:s').".xls";//先定义一个excel文件
		header("Content-Type: application/vnd.ms-execl"); 
		header("Content-Type: application/vnd.ms-excel; charset=utf-8");
		header("Content-Disposition: attachment; filename=$filename"); 
		header("Pragma: no-cache"); 
		header("Expires: 0"); 
    	$excel_content 	=	'<meta http-equiv="content-type" content="application/ms-excel; charset=gb2312"/>';
    	$excel_content 	.=	'<table border="1">';
    	$excel_content 	.=	'<tr><td>序号</td><td>姓名</td><td>年龄</td><td>工作性质</td><td>地址</td><td>历史签证</td><td>真实目的</td><td>手机号码</td><td>签证国家</td><td>文案备注</td><td>顾问备注</td><td>管理员备注</td><td>移民倾向</td></tr>';
    	$member_list 	= M('member')->where(array('deleted'=>'0'))->select();
    	foreach ($member_list as $key => $member) {
		    $member_id  				= $member['id'];
		    $member_name 				= $member['name'];
		    $member_age   				= $member['age'];
		    $member_work 				= $member['work'];
		    $member_address 			= $member['address'];
		    $member_visa_history 		= $member['visa_history'];
		    $member_purpose 			= $member['purpose'];
		    $member_phone 				= $member['phone'];
		    $member_city_history 		= $member['city_history'];
		    $member_remark_copywriter 	= $member['remark_copywriter'];
		    $member_remark_consultant 	= $member['remark_consultant'];
		    $member_remark_admin 		= $member['remark_admin'];
		    $member_appraise 			= $member['appraise'];
		    $excel_content 				.= '<tr><td>'.$member_id.'</td><td>'.$member_name.'</td><td>'.$member_age.'</td><td>'.$member_work.'</td>
		    							<td>'.$member_address.'</td><td>'.$member_visa_history.'</td><td>'.$member_purpose.'</td><td>'.$member_phone.'</td>
		    							<td>'.$member_city_history.'</td><td>'.$member_remark_copywriter.'</td><td>'.$member_remark_consultant.'</td>
		    							<td>'.$member_remark_admin.'</td><td>'.$member_appraise.'</td></tr>';
    	}
    	$excel_content 	.=	'</table>';
    	echo iconv('utf-8','gb2312',$excel_content);
    	die;
    }

    // //Ajax修改会员的移民倾向
    // public function ajax_member_appraise(){
    //     $data_P     =   I('post.');
    //     $id         =   $data_P['id'];
    //     $appraise   =   $data_P['appraise'];
    //     M('member')->where(array('id'=>$id))->save(array('appraise'=>$appraise));
    //     die('success');
    // }

    //显示新增子女
    public function child_add_show(){
        $data_G =   I('get.');
        $p_id   =   $data_G['p_id'];
        $member =   M('member')->where(array('id'=>$p_id))->find();
        if(empty($p_id)||empty($member)){
            $this->error('查无此客户！','/Member/member_list_show');
        }else{
            $this->assign('p_name',$member['name']);
            $this->assign('p_id',$p_id);
            $this->display('child_add');
        }
    }

    //新增子女
    public function child_add(){
        $data_P = I('post.');
        if(!empty($data_P)&&!empty($data_P['name'])){
            $data   =   array();
            $data['name']               =   $data_P['name'];
            $data['age']                =   $data_P['age'];
            $data['parent_id']          =   $data_P['p_id'];
            $data['study_abroad']       =   $data_P['study_abroad'];
            $data['grade']              =   $data_P['grade'];
            $data['english']            =   $data_P['english'];
            $data['gender']             =   $data_P['gender'];
            $data['working']            =   $data_P['working'];
            $result = M('member_child')->add($data);
            if(empty($result)){
                $this->error('新增子女失败！','/Member/member_list_show');
            }else{
                $this->success('新增子女成功！','/Member/child_add_show?p_id='.$data_P['p_id']);
            }
        }else{
            $this->member_list_show();
        }
    }

    //编辑子女
    public function child_edit(){
        $data_P = I('post.');
        if(!empty($data_P)){
            $id         = $data_P['id'];
            $child     = M('member_child')->where(array('id'=>$id))->find();
            if(!empty($child)){
                $data   =   array();
                $data['name']               =   $data_P['name'];
                $data['age']                =   $data_P['age'];
                $data['study_abroad']       =   $data_P['study_abroad'];
                $data['grade']              =   $data_P['grade'];
                $data['english']            =   $data_P['english'];
                $data['gender']             =   $data_P['gender'];
                $data['working']            =   $data_P['working'];
                $result = M('member_child')->where(array('id'=>$id))->save($data);
                if(empty($result)){
                    $this->error('更新失败！','/Member/member_list_show');
                }else{
                    $this->success('更新成功！','/Member/member_list_show');
                }
            }else{
                $this->error('查无此子女！','/Member/member_list_show');
            }
        }else{
            $this->error('查无此子女！','/Member/member_list_show');
        }
    }

    //删除子女
    public function child_delete(){
        $data_G = I('get.');
        if(!empty($data_G['id'])){
            $id         = $data_G['id'];
            $result     = M('member_child')->where(array('id'=>$id))->delete();
            if(!empty($result)){
                $this->success('删除成功！','/Member/member_list_show');
            }else{
                $this->error('查无此子女！','/Member/member_list_show');
            }
        }else{
            $this->error('查无此子女！','/Member/member_list_show');
        }
    }
}
