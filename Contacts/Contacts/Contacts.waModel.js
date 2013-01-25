
guidedModel =// @startlock
{
	Employee :
	{
		methods :
		{// @endlock
			convertAll:function(rate)
			{// @lock
				this.forEach(
					function (emp) {
					emp.salary = Math.floor(emp.salary*(1+rate/100));
					// emp.salary = 35000 + Math.round(Math.random() * (60000 - 40000));
				});
			}// @startlock
		}
	}
};// @endlock

