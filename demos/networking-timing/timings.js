(function(w,d){

	function constructHTML(timings){
        var p, i, v;
        var fragment = d.createDocumentFragment();
        var container = d.getElementById('container');
        for(i = 0; i < timings.length; i++){
            p = d.createElement('p');
            v = timings[i].label + ' : ' + timings[i].time;
            p.innerHTML = v;
            fragment.appendChild(p);
        }
        container.appendChild(fragment);
    }

	function collectMetrics(){
        var t = w.performance.timing;
        var lt = w.chrome && w.chrome.loadTimes && w.chrome.loadTimes();
        var timings = [];
		timings.push({
			label: "Domain Lookup Time",
			time: t.domainLookupEnd - t.domainLookupStart + "ms"
		});
		timings.push({
			label: "TCP Connection Time",
			time: t.connectEnd - t.connectStart + "ms"
		});
		if(t.secureConnectionStart){
		  timings.push({
		    label: "SSL Connection Time",
		    time: t.connectEnd - t.secureConnectionStart + "ms"
		  });
		}

		timings.push({
			label: "Total Response Time",
			time: t.responseEnd - t.requestStart + "ms"
		});
		timings.push({
			label: "DOM Content Loaded",
			time: t.domContentLoadedEventEnd - t.navigationStart + "ms"
		});
		timings.push({
			label: "Page Load Time",
			time: t.loadEventEnd - t.navigationStart + "ms"
		});
		if(lt) {
			if(lt.wasNpnNegotiated) {
			  timings.push({
			    label: "NPN negotiation protocol",
			    time: lt.npnNegotiatedProtocol
			  });
			}
			timings.push({
			  label: "Connection Info",
			  time: lt.connectionInfo
			});
			timings.push({
			  label: "First paint after Document load",
			  time: Math.ceil(lt.firstPaintTime - lt.finishDocumentLoadTime) + "ms"
			});
		}
		constructHTML(timings);
    }
    setTimeout(function(){
        collectMetrics();
    },1000);
})(window, window.document);