import React from 'react'

const eduList = (props) => {
    return (
       props.eduList.map((val, idx) => { 
           let schoolName = `schoolName-${idx}`, degreeName = `degreeName-${idx}`, startDate2 = `startDate2-${idx}`, endDate2 = `endDate-${idx}`, cityEdu = `cityEdu-${idx}`, eduDescription = `eduDescription-${idx}`
            return (   
                <div key={val.index} className="pb-3">
                    <div className="row text-left pt-2">
                        <div className="form-group col-md-6">
                            <label htmlFor="schoolName">School Name</label>
                            <input text="text" name="schoolName" id={schoolName} data-id={idx} className="form-control" placeholder="" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="degreeName">Degree</label>
                            <input text="text" name="degreeName" id={degreeName} data-id={idx}
                                className="form-control"
                                placeholder="Msc" />
                        </div>
                    </div>
                    <div className="row text-left pt-2">
                        <div className="form-group col-md-6">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                        <label htmlFor="startDate2">Start Date</label>
                                        <input text="text" name="startDate2" id={startDate2} data-id={idx} className="form-control" placeholder="August 01" />
                                </div>
                                <div className="col-md-6 form-group">
                                        <label htmlFor="endDate2">End Date</label>
                                        <input text="text" name="endDate2" id={endDate2} data-id={idx} className="form-control" placeholder="July 02" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label>City</label>
                            <input text="text" name="cityEdu" id={cityEdu} data-id={idx}
                                className="form-control"
                                placeholder="City, Country" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="educationDescription">Description</label>
                            <textarea className="form-control" name="eduDescription" rows="4" id={eduDescription} data-id={idx} placeholder="e.g. Passionate about software development for 8+ years and a track 
record of...." rows="3"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 additional-button">
                            {
                                idx === 0 ? <button onClick={() => props.add()} type="button" className="hide-button" ></button>
                                    : <button className="btn btn-danger mt-1" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
                            }
                        </div>
                    </div>
                </div>
           )
       })
    )
}

export default eduList
