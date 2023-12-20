const Ziggy = {"url":"http:\/\/localhost:8000","port":8000,"defaults":{},"routes":{"horizon.stats.index":{"uri":"horizon\/api\/stats","methods":["GET","HEAD"]},"horizon.workload.index":{"uri":"horizon\/api\/workload","methods":["GET","HEAD"]},"horizon.masters.index":{"uri":"horizon\/api\/masters","methods":["GET","HEAD"]},"horizon.monitoring.index":{"uri":"horizon\/api\/monitoring","methods":["GET","HEAD"]},"horizon.monitoring.store":{"uri":"horizon\/api\/monitoring","methods":["POST"]},"horizon.monitoring-tag.paginate":{"uri":"horizon\/api\/monitoring\/{tag}","methods":["GET","HEAD"]},"horizon.monitoring-tag.destroy":{"uri":"horizon\/api\/monitoring\/{tag}","methods":["DELETE"],"wheres":{"tag":".*"}},"horizon.jobs-metrics.index":{"uri":"horizon\/api\/metrics\/jobs","methods":["GET","HEAD"]},"horizon.jobs-metrics.show":{"uri":"horizon\/api\/metrics\/jobs\/{id}","methods":["GET","HEAD"]},"horizon.queues-metrics.index":{"uri":"horizon\/api\/metrics\/queues","methods":["GET","HEAD"]},"horizon.queues-metrics.show":{"uri":"horizon\/api\/metrics\/queues\/{id}","methods":["GET","HEAD"]},"horizon.jobs-batches.index":{"uri":"horizon\/api\/batches","methods":["GET","HEAD"]},"horizon.jobs-batches.show":{"uri":"horizon\/api\/batches\/{id}","methods":["GET","HEAD"]},"horizon.jobs-batches.retry":{"uri":"horizon\/api\/batches\/retry\/{id}","methods":["POST"]},"horizon.pending-jobs.index":{"uri":"horizon\/api\/jobs\/pending","methods":["GET","HEAD"]},"horizon.completed-jobs.index":{"uri":"horizon\/api\/jobs\/completed","methods":["GET","HEAD"]},"horizon.silenced-jobs.index":{"uri":"horizon\/api\/jobs\/silenced","methods":["GET","HEAD"]},"horizon.failed-jobs.index":{"uri":"horizon\/api\/jobs\/failed","methods":["GET","HEAD"]},"horizon.failed-jobs.show":{"uri":"horizon\/api\/jobs\/failed\/{id}","methods":["GET","HEAD"]},"horizon.retry-jobs.show":{"uri":"horizon\/api\/jobs\/retry\/{id}","methods":["POST"]},"horizon.jobs.show":{"uri":"horizon\/api\/jobs\/{id}","methods":["GET","HEAD"]},"horizon.index":{"uri":"horizon\/{view?}","methods":["GET","HEAD"],"wheres":{"view":"(.*)"}},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"chat.streaming":{"uri":"document\/chat\/streaming","methods":["GET","HEAD"]},"profile.edit":{"uri":"profile","methods":["GET","HEAD"]},"profile.update":{"uri":"profile","methods":["PATCH"]},"profile.destroy":{"uri":"profile","methods":["DELETE"]},"documents.index":{"uri":"documents","methods":["GET","HEAD"]},"documents.create":{"uri":"documents\/create","methods":["GET","HEAD"]},"documents.store":{"uri":"documents","methods":["POST"]},"documents.show":{"uri":"documents\/{document}","methods":["GET","HEAD"],"bindings":{"document":"id"}},"documents.edit":{"uri":"documents\/{document}\/edit","methods":["GET","HEAD"]},"documents.update":{"uri":"documents\/{document}","methods":["PUT","PATCH"]},"documents.destroy":{"uri":"documents\/{document}","methods":["DELETE"],"bindings":{"document":"id"}},"chat.index":{"uri":"document\/chat","methods":["GET","HEAD"]},"chat.create":{"uri":"document\/chat\/create","methods":["GET","HEAD"]},"chat.store":{"uri":"document\/chat","methods":["POST"]},"chat.show":{"uri":"document\/chat\/{chat}","methods":["GET","HEAD"],"bindings":{"chat":"id"}},"chat.edit":{"uri":"document\/chat\/{chat}\/edit","methods":["GET","HEAD"]},"chat.update":{"uri":"document\/chat\/{chat}","methods":["PUT","PATCH"]},"chat.destroy":{"uri":"document\/chat\/{chat}","methods":["DELETE"],"bindings":{"chat":"id"}},"documents.include":{"uri":"documents\/include","methods":["POST"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"]},"password.store":{"uri":"reset-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"password.update":{"uri":"password","methods":["PUT"]},"logout":{"uri":"logout","methods":["POST"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
