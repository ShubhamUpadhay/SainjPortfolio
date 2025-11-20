import { Shield, Scale, ShieldCheck, CheckCircle, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
export default function ServiceAreasCard() {
  return (
    <Card className="p-6 glass-card hover:shadow-lg dark:hover:shadow-primary/10 hover:scale-105 transition-all duration-300">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-xl mb-4">Service Areas</CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        {/* Service Areas */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-primary" />
            <span>IT Auditing, Security & Risk Management</span>
          </div>

          <div className="flex items-center space-x-3">
            <Scale className="h-5 w-5 text-primary" />
            <span>Technology Law, Privacy & Compliance Advisory</span>
          </div>

          <div className="flex items-center space-x-3">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span>Identity & Access Management (Azure AD, Okta, AD)</span>
          </div>

          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span>ISO 27001, NIST CSF, CIS Controls, SOX ITGC</span>
          </div>

          <div className="flex items-center space-x-3">
            <Lock className="h-5 w-5 text-primary" />
            <span>Privacy Audits (GDPR, PDPL, CCPA, HIPAA)</span>
          </div>
        </div>

        {/* Industries Served */}
        <div className="mt-6">
          <h5 className="font-medium mb-3">Industries Served</h5>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Financial Services</Badge>
            <Badge variant="secondary">Healthcare</Badge>
            <Badge variant="secondary">Technology</Badge>
            <Badge variant="secondary">Retail</Badge>
            <Badge variant="secondary">Government</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
