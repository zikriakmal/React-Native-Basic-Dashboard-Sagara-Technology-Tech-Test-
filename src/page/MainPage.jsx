import React from 'react'

function MainPage()
{
    return (
        <div className={"row m-0"}>
            <div className={'col-md-6 col-lg-6 col-10 container my-5 card shadow p-5 text-center'} style={{ borderRadius: '14px' }}>
                <h1>Test FrontEnd Sagara Technology</h1>
                <h2>Dev : Zikri Akmal Santoso</h2>
                <div>
                    <a href="https://github.com/zikriakmal" target="_blank">
                        <img style={{ width: 50, height: 50 }} src={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/zikri-akmal-santoso-b61455126/" target="_blank">
                        <img style={{ width: 40, height: 40 }} src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="linkedin" />
                    </a>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
