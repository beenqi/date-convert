class dateConvert {
	constructor(){
		Date.prototype.Format = function(format){ 
			const week = this.getDay();
			let weekStr = '';
			switch(week){
				case 0:
					weekStr = '星期日';
					break;
				case 1:
					weekStr = '星期一';
					break;
				case 2:
					weekStr = '星期二';
					break;
				case 3:
					weekStr = '星期三';
					break;
				case 4:
					weekStr = '星期四';
					break;
				case 5:
					weekStr = '星期五';
					break;
				case 6:
					weekStr = '星期六';
					break;
			}
			var o = { 
				"M+" : this.getMonth()+1, //month 
				"d+" : this.getDate(), //day 
				"h+" : this.getHours(), //hour 
				"m+" : this.getMinutes(), //minute 
				"s+" : this.getSeconds(), //second 
				"w": weekStr,//week
				
			}
		
			if(/(y+)/.test(format)) { 
				format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
			}
		
			for(var k in o) { 
				if(new RegExp("("+ k +")").test(format)) { 
					format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
		 		} 
			} 
			return format; 
		}
	}
	
	convert(value,format='y-m-d h:m:s'){
		if(format == 'y-m-d h:m:s'){
			var myDate= new Date(value).Format("yyyy-MM-dd hh:mm:ss");
			return myDate;
		}else if(format == 'y-m-d'){
			var myDate= new Date(value).Format("yyyy-MM-dd");
			return myDate;
		}else{
			var myDate= new Date(value).Format(format);
			return myDate;
		}
	}
	
	getAppointDate(status,num=1,format){
		var nowdate = new Date();
		var formatmdate = this.convert(nowdate,format);
		if(status=='w'){
					var oneweekdate = new Date(nowdate-7*24*3600*1000*num);
	        formatmdate = this.convert(oneweekdate,format)
	
		}else if(status=='m'){
					nowdate.setMonth(nowdate.getMonth()-num);
	        formatmdate = this.convert(nowdate,format)
		}else if(status=='y'){
					nowdate.setYear(nowdate.getFullYear()-num);
	        formatmdate = this.convert(nowdate,format)
		}
		
		
	  return formatmdate
	}
}
window.dateConvert = dateConvert;