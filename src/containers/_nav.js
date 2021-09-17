export default [
  {
    _name: 'CSidebarNav',
	    _children: [
			{
				_name: 'CSidebarNavItem',
				name: 'Dashboard',
				to: '/admin/dashboard',
				icon: 'cil-speedometer',
			},
			{
				_name: 'CSidebarNavItem',
				name: 'Submissions',
				to: '/admin/submissions',
				icon: 'cilChartPie'
			},
	    ]
  	}
]