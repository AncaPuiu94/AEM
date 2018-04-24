
function validateTitleAnca(dialog) {

    var msg="Please correct the following:\n\r";
    var response=true;

    var title = dialog.getField('./jcr:title').getValue();
	var titlePath=dialog.getField('./titlePath').getValue();

    if(!title){
        msg+="Title should not be empty!\n\r";
        response=false;
    }

    if(!titlePath){
        msg+="Title Path should not be empty!\n\r";
        response=false;
    }

    if(!response){

      CQ.Ext.Msg.show({
          title: 'Validation Failed', 
          msg: msg, 
          buttons: CQ.Ext.MessageBox.OK, 
          icon: CQ.Ext.MessageBox.ERROR
      });
        return false;
    }
};

function checkedForItalic(field,test,isChecked){
    var dialog = field.findParentByType('dialog'); 
    var imagePath = dialog.getField('./imagePath');

    if(isChecked===true){
		imagePath.show();
    }else{
    	imagePath.clearValue();
        imagePath.hide();
    }
}
