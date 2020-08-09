import React from 'react'

const SocialLink = (props) => {
    return (
        props.socialLink.map((val, idx) => {
            let websiteName = `websiteName-${idx}`, linkName = `linkName-${idx}`
            return (
                <div key={val.index} className="">
                    <div className="row text-left pt-2">
                        <div className="form-group col-md-6">
                            <label>Website</label>
                            <input text="text" name="websiteName" id={websiteName} data-id={idx} className="form-control" placeholder="Job Title" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Link</label>
                            <input text="text" name="linkName" id={linkName} data-id={idx}
                                className="form-control"
                                placeholder="" />
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

export default SocialLink
