({
    apexMethod: function (component, method, params) {
        return new Promise(function (resolve, reject) {
            var action = component.get("c." + method)

            action.setParams(params)
            action.setCallback(this, function (response) {
                var state = response.getState()
                if (state === "SUCCESS") {
                    resolve(response.getReturnValue())
                } else if (state === "INCOMPLETE") {
                    // Really? Why??
                } else if (state === "ERROR") {
                    var errors = response.getError()
                    if (errors && errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message)
                        reject(errors[0].message)
                    } else {
                        console.log("Unknown error")
                        reject("Unknown error")
                    }
                }
            })

            $A.enqueueAction(action)
        })
    },
    SOQL: function (component, query) {
        return this.apexMethod(component, 'executeSOQL', {query: query})
    }
})