import React from 'react'

export const GenderCheckBox = () => {
  return (
    <div className='flex mt-2'>
            <div className="form-control mr-4">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text text-gray-300">Male</span>
                    <input type="checkbox"  className="checkbox border-slate-950" />
             </label>
            </div>

            <div className="form-control">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text text-gray-300">Female</span>
                    <input type="checkbox"  className="checkbox border-slate-950" />
             </label>
            </div>
    </div>
  )
}
