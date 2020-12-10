import React from 'react'

const jobList = (props) => {
    return (
       props.jobList.map((val, idx) => { 
            let jobTitle = `jobTitle-${idx}`, employer = `employer-${idx}`, startDate = `startDate-${idx}`, endDate = `endDate-${idx}`, city = `city-${idx}`, description = `description-${idx}`
            return (   
                <div key={val.index} className="pb-3">
                    <div className="row text-left pt-2">
                        <div className="form-group col-md-6">
                            <label>Job Title</label>
                            <input text="text" name="jobTitle" id={jobTitle} data-id={idx} className="form-control" placeholder="Job Title" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Employer</label>
                                <input text="text" name="employer" id={employer} data-id={idx}
                                className="form-control"
                                placeholder="Employer" />
                        </div>
                    </div>
                    <div className="row text-left pt-2">
                        <div className="form-group col-md-6">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label>Start Date</label>
                                            <input text="text" name="startDate" id={startDate} data-id={idx} className="form-control" placeholder="Start Date" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>End Date</label>
                                            <input text="text" name="endDate" id={endDate} data-id={idx} className="form-control" placeholder="End Date" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label>City</label>
                                <input text="text" name="city" id={city} data-id={idx}
                                className="form-control"
                                placeholder="City" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <textarea className="form-control" name="description" rows="4" id={description} data-id={idx} placeholder="e.g. Passionate about software development for 8+ years and a track 
record of...." rows="3"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 additional-button">
                            {
                                idx === 0 ? <button onClick={() => props.add()} type="button"  className="hide-button" ></button>
                                    : <button className="btn btn-danger mt-1" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true"></i></button>
                            }
                        </div>
                    </div>
                </div>
           )
       })
    )
}

export default jobList
