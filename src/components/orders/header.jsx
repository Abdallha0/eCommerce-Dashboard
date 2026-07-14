import React from 'react'

function OrdersHeader() {
    return (
        <>
         

<div className='flex items-center justify-between'>
<div>
<p className='text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]'>Admin · Management</p>
<p className='text-3xl font-bold dark:text-white pt-0.5'>Orders</p>
</div>
<div className='rounded-xl border border-slate-100 bg-white px-4 py-2.5 dark:border-slate-800 dark:bg-slate-900 flex items-center gap-2'>
<span className='text-2xl font-bold dark:text-white'>33</span>
<span className='text-slate-400 text-xs'>total orders</span>
</div>
</div>










        </>
    )
}

export default OrdersHeader