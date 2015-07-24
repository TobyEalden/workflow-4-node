"use strict";
var Activity = require("./activity");
var util = require("util");
var errors = require("../common/errors");
var _ = require("lodash");
function EndMethod() {
  Activity.call(this);
  this.methodName = "";
  this.instanceIdPath = "";
  this.result = null;
}
util.inherits(EndMethod, Activity);
EndMethod.prototype.run = function(callContext, args) {
  var methodName = this.get("methodName");
  if (_(methodName).isString()) {
    var mn = methodName.trim();
    if (mn) {
      callContext.schedule(this.get("result"), "_resultGot");
      return ;
    }
  }
  callContext.fail(new errors.ValidationError("EndMethod activity methodName property's value must be a valid identifier."));
};
EndMethod.prototype._resultGot = function(callContext, reason, result) {
  callContext.end(reason, result);
};
module.exports = EndMethod;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZE1ldGhvZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLFlBQVcsQ0FBQyxDQUFDO0FBQ3BDLEFBQUksRUFBQSxDQUFBLElBQUcsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBQzFCLEFBQUksRUFBQSxDQUFBLE1BQUssRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLGtCQUFpQixDQUFDLENBQUM7QUFDeEMsQUFBSSxFQUFBLENBQUEsQ0FBQSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsUUFBTyxDQUFDLENBQUM7QUFFekIsT0FBUyxVQUFRLENBQUUsQUFBRCxDQUFHO0FBQ2pCLFNBQU8sS0FBSyxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7QUFDbkIsS0FBRyxXQUFXLEVBQUksR0FBQyxDQUFDO0FBQ3BCLEtBQUcsZUFBZSxFQUFJLEdBQUMsQ0FBQztBQUN4QixLQUFHLE9BQU8sRUFBSSxLQUFHLENBQUM7QUFDdEI7QUFBQSxBQUVBLEdBQUcsU0FBUyxBQUFDLENBQUMsU0FBUSxDQUFHLFNBQU8sQ0FBQyxDQUFDO0FBRWxDLFFBQVEsVUFBVSxJQUFJLEVBQUksVUFBVSxXQUFVLENBQUcsQ0FBQSxJQUFHLENBQUc7QUFDbkQsQUFBSSxJQUFBLENBQUEsVUFBUyxFQUFJLENBQUEsSUFBRyxJQUFJLEFBQUMsQ0FBQyxZQUFXLENBQUMsQ0FBQztBQUN2QyxLQUFJLENBQUEsQUFBQyxDQUFDLFVBQVMsQ0FBQyxTQUFTLEFBQUMsRUFBQyxDQUFHO0FBQzFCLEFBQUksTUFBQSxDQUFBLEVBQUMsRUFBSSxDQUFBLFVBQVMsS0FBSyxBQUFDLEVBQUMsQ0FBQztBQUMxQixPQUFJLEVBQUMsQ0FBRztBQUNKLGdCQUFVLFNBQVMsQUFBQyxDQUFDLElBQUcsSUFBSSxBQUFDLENBQUMsUUFBTyxDQUFDLENBQUcsYUFBVyxDQUFDLENBQUM7QUFDdEQsYUFBTTtJQUNWO0FBQUEsRUFDSjtBQUFBLEFBQ0EsWUFBVSxLQUFLLEFBQUMsQ0FBQyxHQUFJLENBQUEsTUFBSyxnQkFBZ0IsQUFBQyxDQUFDLDRFQUEyRSxDQUFDLENBQUMsQ0FBQztBQUM5SCxDQUFBO0FBRUEsUUFBUSxVQUFVLFdBQVcsRUFBSSxVQUFVLFdBQVUsQ0FBRyxDQUFBLE1BQUssQ0FBRyxDQUFBLE1BQUssQ0FBRztBQUNwRSxZQUFVLElBQUksQUFBQyxDQUFDLE1BQUssQ0FBRyxPQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFBO0FBRUEsS0FBSyxRQUFRLEVBQUksVUFBUSxDQUFDO0FBQzFCIiwiZmlsZSI6ImFjdGl2aXRpZXMvZW5kTWV0aG9kLmpzIiwic291cmNlUm9vdCI6ImxpYi9lczYiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWN0aXZpdHkgPSByZXF1aXJlKFwiLi9hY3Rpdml0eVwiKTtcbnZhciB1dGlsID0gcmVxdWlyZShcInV0aWxcIik7XG52YXIgZXJyb3JzID0gcmVxdWlyZShcIi4uL2NvbW1vbi9lcnJvcnNcIik7XG52YXIgXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cbmZ1bmN0aW9uIEVuZE1ldGhvZCgpIHtcbiAgICBBY3Rpdml0eS5jYWxsKHRoaXMpO1xuICAgIHRoaXMubWV0aG9kTmFtZSA9IFwiXCI7XG4gICAgdGhpcy5pbnN0YW5jZUlkUGF0aCA9IFwiXCI7XG4gICAgdGhpcy5yZXN1bHQgPSBudWxsO1xufVxuXG51dGlsLmluaGVyaXRzKEVuZE1ldGhvZCwgQWN0aXZpdHkpO1xuXG5FbmRNZXRob2QucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChjYWxsQ29udGV4dCwgYXJncykge1xuICAgIHZhciBtZXRob2ROYW1lID0gdGhpcy5nZXQoXCJtZXRob2ROYW1lXCIpO1xuICAgIGlmIChfKG1ldGhvZE5hbWUpLmlzU3RyaW5nKCkpIHtcbiAgICAgICAgdmFyIG1uID0gbWV0aG9kTmFtZS50cmltKCk7XG4gICAgICAgIGlmIChtbikge1xuICAgICAgICAgICAgY2FsbENvbnRleHQuc2NoZWR1bGUodGhpcy5nZXQoXCJyZXN1bHRcIiksIFwiX3Jlc3VsdEdvdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWxsQ29udGV4dC5mYWlsKG5ldyBlcnJvcnMuVmFsaWRhdGlvbkVycm9yKFwiRW5kTWV0aG9kIGFjdGl2aXR5IG1ldGhvZE5hbWUgcHJvcGVydHkncyB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgaWRlbnRpZmllci5cIikpO1xufVxuXG5FbmRNZXRob2QucHJvdG90eXBlLl9yZXN1bHRHb3QgPSBmdW5jdGlvbiAoY2FsbENvbnRleHQsIHJlYXNvbiwgcmVzdWx0KSB7XG4gICAgY2FsbENvbnRleHQuZW5kKHJlYXNvbiwgcmVzdWx0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFbmRNZXRob2Q7XG4iXX0=