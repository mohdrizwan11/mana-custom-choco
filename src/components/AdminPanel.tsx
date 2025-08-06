import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Upload, Trash2, Edit, Save, X, Plus, Image as ImageIcon } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface DesignItem {
  id: string;
  name: string;
  price: number;
  tier: 'basic' | 'standard' | 'premium';
  image: string;
  description?: string;
}

interface AdminPanelProps {
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [designs, setDesigns] = useState<DesignItem[]>([
    // Example data - replace with your actual designs
    { id: '1', name: 'Gold Elegance', price: 5, tier: 'basic', image: '/src/assets/wrapper-1-gold.jpg' },
    { id: '2', name: 'Floral Dreams', price: 5, tier: 'basic', image: '/src/assets/wrapper-2-floral.jpg' },
    { id: '3', name: 'Geometric Art', price: 12, tier: 'standard', image: '/src/assets/wrapper-3-geometric.jpg' },
    { id: '4', name: 'Vintage Classic', price: 20, tier: 'premium', image: '/src/assets/wrapper-4-vintage.jpg' },
  ]);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newDesign, setNewDesign] = useState<Partial<DesignItem>>({
    name: '',
    price: 5,
    tier: 'basic',
    image: '',
    description: ''
  });

  // Simple password authentication (replace with proper auth in production)
  const handleLogin = () => {
    if (password === 'manacustom2025') { // Change this password!
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, designId?: string) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        
        if (designId) {
          // Update existing design
          setDesigns(prev => prev.map(design => 
            design.id === designId ? { ...design, image: imageUrl } : design
          ));
        } else {
          // For new design
          setNewDesign(prev => ({ ...prev, image: imageUrl }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addDesign = () => {
    if (newDesign.name && newDesign.image) {
      const design: DesignItem = {
        id: Date.now().toString(),
        name: newDesign.name,
        price: newDesign.price || 5,
        tier: newDesign.tier || 'basic',
        image: newDesign.image,
        description: newDesign.description
      };
      setDesigns(prev => [...prev, design]);
      setNewDesign({ name: '', price: 5, tier: 'basic', image: '', description: '' });
    }
  };

  const deleteDesign = (id: string) => {
    if (confirm('Are you sure you want to delete this design?')) {
      setDesigns(prev => prev.filter(design => design.id !== id));
    }
  };

  const updateDesign = (id: string, updates: Partial<DesignItem>) => {
    setDesigns(prev => prev.map(design => 
      design.id === id ? { ...design, ...updates } : design
    ));
    setEditingId(null);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(designs, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'mana-custom-choco-designs.json';
    link.click();
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedDesigns = JSON.parse(e.target?.result as string);
          setDesigns(importedDesigns);
          alert('Data imported successfully!');
        } catch (error) {
          alert('Error importing data. Please check the file format.');
        }
      };
      reader.readAsText(file);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <Card className="w-96">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>Enter password to access admin panel</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleLogin} className="flex-1">Login</Button>
              <Button variant="outline" onClick={onClose}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Mana Custom Choco - Admin Panel</h1>
          <Button variant="outline" onClick={onClose}>
            <X className="h-4 w-4 mr-2" />
            Close Admin
          </Button>
        </div>

        <Tabs defaultValue="designs" className="space-y-4">
          <TabsList>
            <TabsTrigger value="designs">Manage Designs</TabsTrigger>
            <TabsTrigger value="add-new">Add New Design</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="designs" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {designs.map((design) => (
                <Card key={design.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{design.name}</CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge variant={design.tier === 'premium' ? 'default' : 'secondary'}>
                            {design.tier}
                          </Badge>
                          <Badge variant="outline">₹{design.price}</Badge>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setEditingId(design.id)}
                        >
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteDesign(design.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <img
                        src={design.image}
                        alt={design.name}
                        className="w-full h-32 object-cover rounded"
                      />
                      
                      {editingId === design.id ? (
                        <div className="space-y-2">
                          <Input
                            value={design.name}
                            onChange={(e) => updateDesign(design.id, { name: e.target.value })}
                            placeholder="Design name"
                          />
                          <Input
                            type="number"
                            value={design.price}
                            onChange={(e) => updateDesign(design.id, { price: Number(e.target.value) })}
                            placeholder="Price"
                          />
                          <select
                            value={design.tier}
                            onChange={(e) => updateDesign(design.id, { tier: e.target.value as any })}
                            className="w-full p-2 border rounded"
                          >
                            <option value="basic">Basic</option>
                            <option value="standard">Standard</option>
                            <option value="premium">Premium</option>
                          </select>
                          <div>
                            <Label htmlFor={`upload-${design.id}`}>Update Image</Label>
                            <Input
                              id={`upload-${design.id}`}
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e, design.id)}
                            />
                          </div>
                          <Button
                            size="sm"
                            onClick={() => setEditingId(null)}
                          >
                            <Save className="h-3 w-3 mr-1" />
                            Save
                          </Button>
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {design.description || 'No description'}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="add-new" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Add New Design</CardTitle>
                <CardDescription>Upload a new chocolate wrapper design</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Design Name</Label>
                    <Input
                      id="name"
                      value={newDesign.name}
                      onChange={(e) => setNewDesign(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter design name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price (₹)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newDesign.price}
                      onChange={(e) => setNewDesign(prev => ({ ...prev, price: Number(e.target.value) }))}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="tier">Tier</Label>
                  <select
                    id="tier"
                    value={newDesign.tier}
                    onChange={(e) => setNewDesign(prev => ({ ...prev, tier: e.target.value as any }))}
                    className="w-full p-2 border rounded"
                  >
                    <option value="basic">Basic (₹5)</option>
                    <option value="standard">Standard (₹12)</option>
                    <option value="premium">Premium (₹20)</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    value={newDesign.description}
                    onChange={(e) => setNewDesign(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Design description"
                  />
                </div>

                <div>
                  <Label htmlFor="image-upload">Upload Image</Label>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e)}
                  />
                  {newDesign.image && (
                    <img
                      src={newDesign.image}
                      alt="Preview"
                      className="mt-2 w-32 h-32 object-cover rounded"
                    />
                  )}
                </div>

                <Button onClick={addDesign} disabled={!newDesign.name || !newDesign.image}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Design
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Data Management</CardTitle>
                <CardDescription>Export or import your design data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <Button onClick={exportData}>
                    Export Designs
                  </Button>
                  <div>
                    <Input
                      type="file"
                      accept=".json"
                      onChange={importData}
                      className="hidden"
                      id="import-data"
                    />
                    <Label htmlFor="import-data">
                      <Button variant="outline" asChild>
                        <span>Import Designs</span>
                      </Button>
                    </Label>
                  </div>
                </div>
                
                <Alert>
                  <AlertDescription>
                    <strong>Important:</strong> Always backup your data before making changes. 
                    Export your current designs before importing new ones.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
