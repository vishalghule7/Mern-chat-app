import React from 'react'

 const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className='flex mt-2'>
            <div className="form-control mr-4">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : " "}`}>
                    <span className="label-text text-gray-300">Male</span>
                    <input type="checkbox"  className="checkbox border-slate-950"
                    checked={selectedGender === "male"}
                    onChange={() => onCheckboxChange("male")}
                    />
             </label>
            </div>

            <div className="form-control">
                <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : " "}`}>
                    <span className="label-text text-gray-300">Female</span>
                    <input type="checkbox"  className="checkbox border-slate-950" 
                    checked={selectedGender === "female"}
                    onChange={() => onCheckboxChange("female")}
                    />
             </label>
            </div>
    </div>
  )
}

export default GenderCheckBox;