({
    initHandler : function(component, event, helper) {
        const recordId = component.get('v.recordId')
        const query = "SELECT Id, Name FROM Contact WHERE AccountId = '" + recordId + "'"

        helper.SOQL(component, query).then(function(result){
            component.set('v.records', result)
        }).catch(function (error) {
			console.error(error)
		})
        
        const params = {'accountId': recordId}
        helper.apexMethod(component, 'totalContacts', params).then(function(result) {
            component.set('v.totalRecords', result)
        }).catch(function (error) {
			console.error(error)
		})
    }
})