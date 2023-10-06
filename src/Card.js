import React from 'react'

function Card(props) {
    console.log(props)
    return (
        <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-center">{props.plan.title}</h5>
                    <h6 class="card-price text-center">${props.plan.price}/month</h6>
                    <hr />
                    <ul class="fa-ul">
                        <li class={props.plan.userState ? "" : "text-muted"}><span class="fa-li"><i class={props.plan.userState ? "fas fa-check" : "fas fa-times"}></i></span>{props.plan.user}</li>
                        <li class={props.plan.storageState ? "" : "text-muted"}><span class="fa-li"><i class={props.plan.storageState ? "fas fa-check" : "fas fa-times"}></i></span>{props.plan.storage}</li>
                        <li class={props.plan.publicProjectsState ? "" : "text-muted"}><span class="fa-li"><i class={props.plan.publicProjectsState ? "fas fa-check" : "fas fa-times"}></i></span>{props.plan.publicProjects}</li>
                        <li class={props.plan.communityAccessState ? "" : "text-muted"}><span class="fa-li"><i class={props.plan.communityAccessState ? "fas fa-check" : "fas fa-times"}></i></span>{props.plan.communityAccess}</li>
                        <li class={props.plan.privateProjectsState ? "" : "text-muted"}><span class="fa-li"><i class={props.plan.privateProjectsState ? "fas fa-check" : "fas fa-times"}></i></span>{props.plan.privateProjects}</li>
                        <li class={props.plan.phoneSupportState ? "" : "text-muted"}><span class="fa-li"><i class={props.plan.phoneSupportState ? "fas fa-check" : "fas fa-times"}></i></span>{props.plan.phoneSupport}</li>
                        <li class={props.plan.subdomainState ? "" : "text-muted"}><span class="fa-li"><i class={props.plan.subdomainState ? "fas fa-check" : "fas fa-times"}></i></span>{props.plan.subdomain}</li>
                        <li class={props.plan.statusReportsState ? "" : "text-muted"}><span class="fa-li"><i class={props.plan.statusReportsState ? "fas fa-check" : "fas fa-times"}></i></span>{props.plan.statusReports}</li>
                    </ul>
                    <button className="btn btn-primary text-center">Button</button>
                </div>
            </div>
        </div>
    )

}

export default Card